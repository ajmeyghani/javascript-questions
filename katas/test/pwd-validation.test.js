var assert = require('chai').assert;
var validate = require('../pwd-validation');
/*
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
 */
describe("Password Regex validator", () => {
  it("should validate passwords given the specified rule", () => {
    assert.equal(validate('djI38D55'), true, 'djI38D55 - Expected true');
    assert.equal(validate('a2.d412'), false, 'a2.d412 - Expected false');
    assert.equal(validate('JHD5FJ53'), false, 'JHD5FJ53 - Expected false');
    assert.equal(validate('!fdjn345'), false, '!fdjn345 - Expected false');
    assert.equal(validate('jfkdfj3j'), false, 'jfkdfj3j - Expected false');
    assert.equal(validate('123'), false, '123 - Expected false');
    assert.equal(validate('abc'), false, 'abc - Expected false');
    assert.equal(validate('Password123'), true, 'Password123 - Expected true');
  });
});


