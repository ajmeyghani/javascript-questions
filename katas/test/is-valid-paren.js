const assert = require('chai').assert;
const isValidParen = require('../is-valid-paren');
describe('Is valid paren tests', function() {
  it('should return true if the parens are balanced', function() {
    assert.equal(isValidParen("()"), true);
    assert.equal(isValidParen("())"), false);
    // assert.equal(isValidParen("()"), true);
    // assert.equal(isValidParen(")(()))"), false);
    // assert.equal(isValidParen("("), false);
    // assert.equal(isValidParen("(())((()())())"), true);
  });
});

