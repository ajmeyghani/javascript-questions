var assert = require('chai').assert;
var validate = require('../is-conseq');

describe("conseq validator", () => {
  it("should find which value should be in the conseq sequence", () => {
    assert.equal(validate([1,2,4,5]), 3, 'The missing value in the sequence is 3');
    assert.equal(validate([1,3,4]), 2, 'The missing value in the sequence is 3');
  });
});


