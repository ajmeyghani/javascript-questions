var assert = require('chai').assert;
var makeNav = require('../recur-nav/recur-nav-solution');
var expectedNavResult = require('../recur-nav/result');
var apiResp = require('../recur-nav/response.json');

describe('Recur Nav tests:', function() {
  it('should build the nav correctly', function() {
    assert.deepEqual(makeNav(apiResp.data), expectedNavResult);
  });
});
