const genericFixture = require('./genericFixture');
const StaffRepository = require('../database/repositories/staffRepository');

const staffFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new StaffRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = staffFixture;
