var assert = require('chai').assert;
var getSum = require('../get-sum');

describe('get-sum tests', function() {
  it('should pass', function() {
    assert.equal(getSum(0, -1), -1);
    assert.equal(getSum(0, 1), 1);
    assert.equal(getSum(1, 3), 6);
    assert.equal(getSum(-3, 0), -6);
  });
});
