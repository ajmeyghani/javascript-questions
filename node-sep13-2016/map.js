var nums = [1,2,3];

const ns = nums.map(a => a * 5); // ES6
// |
// Transpile
// |
var newArr = nums.map(function(a) { // ES5: IE9 and above
  return a * 5;
});



console.log(newArr);
console.log(ns);
