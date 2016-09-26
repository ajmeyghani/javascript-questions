var assert = require('chai').assert;
var sumTwoSmallestNumbers = require('../lowest');
describe("Lowest Tests", () => {
  it("should work for basic tests", () => {
    assert.equal(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
    assert.equal(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
    assert.equal(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
    assert.equal(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
    assert.equal(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
  });
});
