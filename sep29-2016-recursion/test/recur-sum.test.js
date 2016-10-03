var assert = require('chai').assert;
var recurSum = require('../recur-sum/sum-solution');
describe('Recur sum tests', function() {
  it('should add the numbers in an array recursively', function() {
    assert.equal(recurSum([1,2,3,4]), 10);
  });
  it('should return 0 if the array is empty', function() {
    assert.equal(recurSum([]), 0);
  });
  it('should return NaN if the input array elements are not all numbers', function() {
    assert.equal(Number.isNaN(recurSum(['ahh', 'bb'])), true);
  });
});
