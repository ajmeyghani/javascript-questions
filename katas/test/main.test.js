var assert = require('chai').assert;
var getMedian = require('../median');

describe('Median function', function() {
  it('should return NaN if list is empty', function() {
    var median = getMedian([]);
    assert.equal(Number.isNaN(median), true);
  });

  it('should return NaN if not valid input', function() {
    var median = getMedian([1, 2, "5"]);
    assert.equal(Number.isNaN(median), true);
  });

  it('should return the right result', function() {
    var median = getMedian([1]);
    assert.equal(median, 1);
  });

  it('should return the right result', function() {
    var median = getMedian([1, 2]);
    assert.equal(median, 1.5);
  });

  it('should return the right result', function() {
    var median = getMedian([1, 2, 3]);
    assert.equal(median, 2);
  });

  it('should return the right result', function() {
    var median = getMedian([1, 2, 3, 10]);
    assert.equal(median, 2.5);
  });

  it('should return the right result even with negative numbers', function() {
    var median = getMedian([-5, -1, 0, 1, 2]);
    assert.equal(median, 0);
  });

  it('should return the right result even with negative numbers', function() {
    var median = getMedian([-5, -1, 0, 1]);
    assert.equal(median, -0.5);
  });

  it('should return the right result even with negative numbers with unsorted numbers', function() {
    var median = getMedian([-5, -1, 1, 0]);
    assert.equal(median, -0.5);
  });
});
