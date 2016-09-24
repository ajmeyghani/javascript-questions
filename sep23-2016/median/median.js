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

