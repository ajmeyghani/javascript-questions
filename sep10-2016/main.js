
/*
what are the data types in JavaScript?
*/

/*
What is the output:
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
*/
// sol
for (var i = 0; i < 5; i++) {
  (function(x) {
      setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}

/*
  Sum function recrusive. Sum an array
*/

/*
  function to check if a string is a palindrome:
  Anna
  level
  tom (false)
*/

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}


/*
  Sum that works either way
  console.log(sum(2,3));   // Outputs 5
  console.log(sum(2)(3));  // Outputs 5
*/
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}


/*
 fibonacci with memoization
*/

var fibo = (function () {
  'use strict';
  var memo = {};
  function fi(n) {
    if (n < 0) { return -1 } else {
      var value = (n in memo) ? memo[n] : (!n || n === 1) ? 1 : fi(n - 1) + fi(n - 2);
      memo[n] = value;
      return value;
    }
  }
  return fi;
})();

console.log(fibo(5));
var c = [0,1,2,3,4,5,6,7];
var seq = [];

c.forEach(function (n) {
  seq.push(fibo(n));
});

console.log(seq);


/* implement queue class */
