/*
Credit Card Numbers:
Invalid: 79927398710, 79927398711, 79927398712, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719
Valid: 79927398713
 */

function doubleEveryOtherFromEnd(array) {
  var result = [];
  for (var counter = array.length - 1; counter >= 0; counter--) {
    if (array.length % 2 !== 0) {
      if (counter % 2 !== 0) {
        result.push(array[counter] * 2);
      } else {
        result.push(array[counter]);
      }
    } else {
      if (counter % 2 === 0) {
        result.push(array[counter] * 2);
      } else {
        result.push(array[counter]);
      }
    }
  }
  result.reverse();
  return result;
}
console.log(doubleEveryOtherFromEnd([1,2,3,4,5])); // -> [1,4,3,8,5]
console.log(doubleEveryOtherFromEnd([1,2,3,4])); // -> [2,2,6,4]


/*
Look at each value, if the value is larger than 9, subtract 9 from it
otherwise do not change the value.

Eg:
[1,2,12,3,15] -> [1,2,3,3,6]
 */


/* add up all the numbers and check if the final sum is divisible by 10
if it is, return true, otherwise return false. This will be the last
step of the Luhn Algorithm.
*/














