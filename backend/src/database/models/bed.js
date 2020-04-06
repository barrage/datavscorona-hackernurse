const database = require('../database');
const Schema = database.Schema;
const {FileSchema} = require('./file');

/**
 * Bed database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const BedSchema = new Schema(
    {
        attachments: [FileSchema],
        hospital: {
            type: Schema.Types.ObjectId,
            ref: 'hospital',
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
        name: {type: String, required: true},
    },
    {timestamps: true},
);

BedSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

BedSchema.set('toJSON', {
    getters: true,
});

BedSchema.set('toObject', {
    getters: true,
});

const Bed = database.model('bed', BedSchema);

module.exports = Bed;
