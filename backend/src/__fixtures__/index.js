const userFixture = require('./userFixture');
const respiratorFixture = require('./respiratorFixture');
const bedFixture = require('./bedFixture');
const hospitalFixture = require('./hospitalFixture');
const staffFixture = require('./staffFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  respirator: respiratorFixture,
  bed: bedFixture,
  hospital: hospitalFixture,
  staff: staffFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
