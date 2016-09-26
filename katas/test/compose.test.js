const assert = require('chai').assert;
const mult5AfterAdd10 = require('../compose');
describe('Compose function tests', function() {
  it('should add 10 input and then multiply by 5', function() {
    assert.equal(mult5AfterAdd10(2), 60);
  });
});

