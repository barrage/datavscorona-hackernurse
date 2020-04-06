const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Respirator database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const RespiratorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    description: {
      type: String,
      maxlength: 21845,
    },
    unitPrice: {
      type: Number,
      min: 0.01,
      max: 99999,
    },
    photos: [FileSchema],
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
    importHash: { type: String },
  },
  { timestamps: true },
);

RespiratorSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

RespiratorSchema.set('toJSON', {
  getters: true,
});

RespiratorSchema.set('toObject', {
  getters: true,
});

const Respirator = database.model('respirator', RespiratorSchema);

module.exports = Respirator;
