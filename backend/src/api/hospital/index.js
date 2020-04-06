module.exports = (app) => {
  app.post(`/hospital`, require('./hospitalCreate'));
  app.put(`/hospital/:id`, require('./hospitalUpdate'));
  app.post(`/hospital/import`, require('./hospitalImport'));
  app.delete(`/hospital`, require('./hospitalDestroy'));
  app.get(
    `/hospital/autocomplete`,
    require('./hospitalAutocomplete'),
  );
  app.get(`/hospital`, require('./hospitalList'));
  app.get(`/hospital/:id`, require('./hospitalFind'));
};
