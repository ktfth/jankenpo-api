// Initializes the `rounds` service on path `/rounds`
const createService = require('feathers-memory');
const hooks = require('./rounds.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/rounds', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('rounds');

  service.hooks(hooks);
};
