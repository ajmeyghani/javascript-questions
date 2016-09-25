/*
write a function to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
  return Number(String(num).split('').map(n => Math.pow(Number(n), 2)).join(''));
}
/*
function squareDigits(num){
  return +(num + '').split('').reduce(function(r, v){
    return v = +v, r + v * v;
  }, '');
}
*/
module.exports = squareDigits;
