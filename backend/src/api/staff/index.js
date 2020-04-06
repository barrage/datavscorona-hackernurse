module.exports = (app) => {
  app.post(`/staff`, require('./staffCreate'));
  app.put(`/staff/:id`, require('./staffUpdate'));
  app.post(`/staff/import`, require('./staffImport'));
  app.delete(`/staff`, require('./staffDestroy'));
  app.get(
    `/staff/autocomplete`,
    require('./staffAutocomplete'),
  );
  app.get(`/staff`, require('./staffList'));
  app.get(`/staff/:id`, require('./staffFind'));
};
