/*
Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

'use strict';
function getSum(a, b) {
  if (a === b) {
    return a;
  }
  const range = [];
  let min = Math.min(...[a, b]);
  const max = Math.max(...[a, b]);
  while (min <= max) {
    range.push(min);
    min += 1;
  }
  return range.reduce((c, n) => c + n);
}

/*
function GetSum( a,b ) {
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}


function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

function GetSum( a,b ) {
   // arithmetic series formula
   return ((Math.max(a,b) - Math.min(a,b) + 1) * (Math.max(a,b) + Math.min(a,b)) / 2);
}

function GetSum( a,b ) {
   return a === b ? a : (a + b) * (Math.abs(b-a)+1)/2;
}
*/

module.exports = getSum;
