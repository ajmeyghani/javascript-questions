var assert = require('chai').assert;
var findNb = require('../cubes');

describe("Cube Tests", function() {
  it('should pass', function() {
    assert.equal(findNb(225), 5);
    assert.equal(findNb(1071225), 45);
    assert.equal(findNb(4183059834009), 2022);
    assert.equal(findNb(24723578342962), -1);
    assert.equal(findNb(135440716410000), 4824);
    assert.equal(findNb(40539911473216), 3568);
  });
});
