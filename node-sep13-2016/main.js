var sum = require('./auth');
var assert = require('assert');
console.log(sum(1,2));

// mocha is a testing framework

// assertion
assert(sum(1,2), 3);
assert(sum(), 0);
assert(sum(1.2,2), 3.2);


// automated: as part of the integartoin
// 
