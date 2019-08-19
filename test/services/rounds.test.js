const assert = require('assert');
const app = require('../../src/app');

describe('\'rounds\' service', () => {
  it('registered the service', () => {
    const service = app.service('rounds');

    assert.ok(service, 'Registered the service');
  });
});
