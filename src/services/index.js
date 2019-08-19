const rounds = require('./rounds/rounds.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rounds);
};
