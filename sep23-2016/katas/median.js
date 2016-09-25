/*
Write a function that takes an array of numbers and returns
the median. The median number is defined as follows:

If there is an odd number of data values then the median will be the value in the middle. If there is an even number of data values the median is the mean of the two data values in the middle. For the data set 1, 1, 2, 5, 6, 6, 9 the median is 5. For the data set 1, 1, 2, 6, 6, 9 the median is 4.

*/

/**
 * Given a list of numbers, returns the median
 * @param {Array} nums array of numbers
 * @return {number} the median
 */
function getMedian(nums) {
  var isValidInput = nums.length && nums.every(n => typeof n === 'number');
  if (!isValidInput) {
    return NaN;
  }
  var numbers = nums.slice(0).sort((a, b) => a - b);
  var middle = Math.floor(numbers.length / 2);
  var isEven = numbers.length % 2 === 0;
  return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
}

module.exports = getMedian;

