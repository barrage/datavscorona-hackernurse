const genericFixture = require('./genericFixture');
const HospitalRepository = require('../database/repositories/hospitalRepository');

const hospitalFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new HospitalRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = hospitalFixture;
