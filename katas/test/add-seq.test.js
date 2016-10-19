const assert = require('chai').assert;
const sumConsecutives = require('../add-seq');

describe('Add sequence tests', function() {
  it('should add the seq of numbers', function() {
    assert.deepEqual(sumConsecutives([1, 1, 0]), [2, 0]);
  });
  it('should add the sequence numbers', function() {
    assert.deepEqual(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]), [1, 12, 0, 4, 6, 1]);
  });
  it('should add the sequence', function() {
    assert.deepEqual(sumConsecutives([1, 1, 7, 7, 3]), [2, 14, 3]);
  });
  it('should add the sequence', function() {
    assert.deepEqual(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0]);
  });
  it('should add the sequence', function() {
    assert.deepEqual(sumConsecutives([3, 3, 3, 3, 1]), [12, 1]);
  });
});
