var nums = [1,2,3];

/* methods */
// map, filter, reduce, forEach
// almost all of them return a new array

// map
var newArr = nums.map(num => num + 1);
console.log(nums);
console.log(newArr);

// filter
var oddValues = nums.filter(n => n < 2);
console.log(oddValues);

// reduce: reduces all the elms into one single value
var sum = nums.reduce(function(r, n) {
  return r + n;
});




var strings = ['abc5', '12', 'j/x-+']; // -> ['abc5', '12']
// var sum = nums.reduce(function() {}, 10);
// 1,2,3,4
// 1, 2 -> 3 (result) 1st: result=1, n=2
// 3 + 3 -> 6 (reuslt2) 2nd: result=6, n=2
// 6 + 4 -> 10 
console.log(sum);





