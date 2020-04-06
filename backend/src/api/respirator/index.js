module.exports = (app) => {
  app.post(`/respirator`, require('./respiratorCreate'));
  app.put(`/respirator/:id`, require('./respiratorUpdate'));
  app.post(`/respirator/import`, require('./respiratorImport'));
  app.delete(`/respirator`, require('./respiratorDestroy'));
  app.get(
    `/respirator/autocomplete`,
    require('./respiratorAutocomplete'),
  );
  app.get(`/respirator`, require('./respiratorList'));
  app.get(`/respirator/:id`, require('./respiratorFind'));
};
