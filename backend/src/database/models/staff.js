const database = require('../database');
const Schema = database.Schema;

/**
 * Staff database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const StaffSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
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

StaffSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

StaffSchema.set('toJSON', {
  getters: true,
});

StaffSchema.set('toObject', {
  getters: true,
});

const Staff = database.model('staff', StaffSchema);

module.exports = Staff;
