var assert = require('chai').assert;
var squareDigits = require('../square-each');

describe('Square digit tests', function() {
  it('should pass', function() {
    assert.equal(squareDigits(123), 149);
  });
  it('should pass', function() {
    assert.equal(squareDigits(412), 1614);
  });
  it('should pass', function() {
    assert.equal(squareDigits(9119), 811181);
  });
});

