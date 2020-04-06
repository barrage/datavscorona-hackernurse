const genericFixture = require('./genericFixture');
const RespiratorRepository = require('../database/repositories/respiratorRepository');

const respiratorFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new RespiratorRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = respiratorFixture;
