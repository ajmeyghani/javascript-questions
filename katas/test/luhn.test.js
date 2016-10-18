const assert = require('chai').assert;
const luhn = require('../luhn');

/*
Invalid: 79927398710, 79927398711, 79927398712, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719
Valid: 79927398713
*/

describe('Luhn tests', function() {
  it('should validate correct credit card numbers', function() {
    assert.equal(luhn(79927398710), false);
  });
  it('should validate correct credit card numbers', function() {
    assert.equal(luhn(79927398713), true);
  });
});

