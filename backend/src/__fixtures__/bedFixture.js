const genericFixture = require('./genericFixture');
const BedRepository = require('../database/repositories/bedRepository');

const bedFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new BedRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = bedFixture;
