var assert = require('chai').assert;
var mergeNumbers = require('../merge-numbers');

describe('Merge number tests', function() {
  it('should merge two lists', function() {
    var result = mergeNumbers([1, 27], [2, 4]);
    assert.deepEqual(result, [27, 4, 1]);
  });
});

