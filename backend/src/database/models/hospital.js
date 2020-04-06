const database = require('../database');
const Schema = database.Schema;

/**
 * Hospital database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const HospitalSchema = new Schema(
    {
        name: {
            type: String,
            index: {unique: true}
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        importHash: {type: String},

    },
    {timestamps: true},
);

HospitalSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

HospitalSchema.set('toJSON', {
    getters: true,
});

HospitalSchema.set('toObject', {
    getters: true,
});

const Hospital = database.model('hospital', HospitalSchema);

module.exports = Hospital;
