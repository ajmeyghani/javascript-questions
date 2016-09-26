var assert = require('chai').assert;
var getOdds = require('../get-odds');

describe('Get odds test', function() {
  it('should return an empty list if the input is an empty array', function() {
    var odds = getOdds([]);
    assert.deepEqual(odds, []);
  });

  it('should return the items at the odd indecies', function() {
    var odds = getOdds(["apple", "hello", "orange", "world"]);
    assert.deepEqual(odds, ["hello", "world"]);
  });

  it('should return the items at the odd indecies', function() {
    var odds = getOdds(['hello', 'world']);
    assert.deepEqual(odds, ['world']);
  });
});

