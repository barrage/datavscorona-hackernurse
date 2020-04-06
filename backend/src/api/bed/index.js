module.exports = (app) => {
  app.post(`/bed`, require('./bedCreate'));
  app.put(`/bed/:id`, require('./bedUpdate'));
  app.post(`/bed/import`, require('./bedImport'));
  app.delete(`/bed`, require('./bedDestroy'));
  app.get(
    `/bed/autocomplete`,
    require('./bedAutocomplete'),
  );
  app.get(`/bed`, require('./bedList'));
  app.get(`/bed/:id`, require('./bedFind'));
};
