const assert = require('chai').assert;
const move = require('../move-odd');

describe('Move odd numbers and sort', function() {
  it('should sort odd numbers but not touch the even nums', function() {
    assert.deepEqual(move([1, 2]), [1, 2]);
  });
  it('should sort odd numbers but not touch the even nums', function() {
    assert.deepEqual(move([5, 0, 1, 9, 13, 2, 4]), [1, 0, 5, 9, 13, 2, 4]);
  });
  it('should sort the odd numbers', function() {
    assert.deepEqual(move([5, 1, 3]), [1, 3, 5]);
  });
});

