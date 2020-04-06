const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Hospital = require('../models/hospital');
const Respirator = require('../models/respirator');
const Bed = require('../models/bed');
const Staff = require('../models/staff');

/**
 * Handles database operations for the Hospital.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class HospitalRepository {
    /**
     * Creates the Hospital.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    async create(data, options) {
        if (MongooseRepository.getSession(options)) {
            await Hospital.createCollection();
        }

        const currentUser = MongooseRepository.getCurrentUser(
            options,
        );

        const [record] = await Hospital.create(
            [
                {
                    ...data,
                    createdBy: currentUser.id,
                    updatedBy: currentUser.id,
                },
            ],
            MongooseRepository.getSessionOptionsIfExists(options),
        );

        await this._createAuditLog(
            AuditLogRepository.CREATE,
            record.id,
            data,
            options,
        );


        return this.findById(record.id, options);
    }

    /**
     * Updates the Hospital.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    async update(id, data, options) {
        await MongooseRepository.wrapWithSessionIfExists(
            Hospital.updateOne(
                {_id: id},
                {
                    ...data,
                    updatedBy: MongooseRepository.getCurrentUser(
                        options,
                    ).id,
                },
            ),
            options,
        );

        await this._createAuditLog(
            AuditLogRepository.UPDATE,
            id,
            data,
            options,
        );

        const record = await this.findById(id, options);


        return record;
    }

    /**
     * Deletes the Hospital.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    async destroy(id, options) {
        await MongooseRepository.wrapWithSessionIfExists(
            Hospital.deleteOne({_id: id}),
            options,
        );

        await this._createAuditLog(
            AuditLogRepository.DELETE,
            id,
            null,
            options,
        );

        await MongooseRepository.destroyRelationToOne(
            id,
            Respirator,
            'hospital',
            options,
        );

        await MongooseRepository.destroyRelationToOne(
            id,
            Bed,
            'hospital',
            options,
        );

        await MongooseRepository.destroyRelationToOne(
            id,
            Staff,
            'hospital',
            options,
        );
    }

    /**
     * Counts the number of Hospitals based on the filter.
     *
     * @param {Object} filter
     * @param {Object} [options]
     */
    async count(filter, options) {
        return MongooseRepository.wrapWithSessionIfExists(
            Hospital.countDocuments(filter),
            options,
        );
    }

    /**
     * Finds the Hospital and its relations.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    async findById(id, options) {
        return MongooseRepository.wrapWithSessionIfExists(
            Hospital.findById(id),
            options,
        );
    }

    /**
     * Finds the Hospital and its relations.
     *
     * @param {string} name
     * @param {Object} [options]
     */
    async findByName(name, options) {
        return MongooseRepository.wrapWithSessionIfExists(
            Hospital.findOne({name: name}),
            options,
        );
    }

    /**
     * Finds the Hospitals based on the query.
     * See https://mongoosejs.com/docs/queries.html to learn how
     * to customize the queries.
     *
     * @param {Object} query
     * @param {Object} query.filter
     * @param {number} query.limit
     * @param  {number} query.offset
     * @param  {string} query.orderBy
     *
     * @returns {Promise<Object>} response - Object containing the rows and the count.
     */
    async findAndCountAll(
        {filter, limit, offset, orderBy} = {
            filter: null,
            limit: 0,
            offset: 0,
            orderBy: null,
        },
        options,
    ) {
        let criteria = {};

        if (filter) {
            if (filter.id) {
                criteria = {
                    ...criteria,
                    ['_id']: MongooseQueryUtils.uuid(filter.id),
                };
            }

            if (filter.name) {
                criteria = {
                    ...criteria,
                    name: {
                        $regex: MongooseQueryUtils.escapeRegExp(
                            filter.name,
                        ),
                        $options: 'i',
                    },
                };
            }

            if (filter.createdAtRange) {
                const [start, end] = filter.createdAtRange;

                if (start !== undefined && start !== null && start !== '') {
                    criteria = {
                        ...criteria,
                        ['createdAt']: {
                            ...criteria.createdAt,
                            $gte: start,
                        },
                    };
                }

                if (end !== undefined && end !== null && end !== '') {
                    criteria = {
                        ...criteria,
                        ['createdAt']: {
                            ...criteria.createdAt,
                            $lte: end,
                        },
                    };
                }
            }
        }

        const sort = MongooseQueryUtils.sort(
            orderBy || 'createdAt_DESC',
        );

        const skip = Number(offset || 0) || undefined;
        const limitEscaped = Number(limit || 0) || undefined;

        const rows = await Hospital.find(criteria)
            .skip(skip)
            .limit(limitEscaped)
            .sort(sort);

        const count = await Hospital.countDocuments(criteria);

        return {rows, count};
    }

    /**
     * Lists the Hospitals to populate the autocomplete.
     * See https://mongoosejs.com/docs/queries.html to learn how to
     * customize the query.
     *
     * @param {Object} search
     * @param {number} limit
     */
    async findAllAutocomplete(search, limit) {
        let criteria = {};

        if (search.query) {
            criteria = {
                $or: [
                    {_id: MongooseQueryUtils.uuid(search.query)},

                ],
            };
        }

        if(search.hospital){
            criteria = {
                ...criteria,
                _id: search.hospital,
            };
        }

        const sort = MongooseQueryUtils.sort('id_ASC');
        const limitEscaped = Number(limit || 0) || undefined;

        const records = await Hospital.find(criteria)
            .limit(limitEscaped)
            .sort(sort);

        return records.map((record) => ({
            id: record.id,
            label: record['name'],
        }));
    }

    /**
     * Creates an audit log of the operation.
     *
     * @param {string} action - The action [create, update or delete].
     * @param {object} id - The record id
     * @param {object} data - The new data passed on the request
     * @param {object} options
     */
    async _createAuditLog(action, id, data, options) {
        await AuditLogRepository.log(
            {
                entityName: Hospital.modelName,
                entityId: id,
                action,
                values: data,
            },
            options,
        );
    }
}

module.exports = HospitalRepository;
