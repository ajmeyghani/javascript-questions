/*
Write a function that merges two list with the following condition:
  All the numbers that are cubic (from the first list)
  All the numbers that are square (from the scond list)
  Note that the final list should be sorted in desending order.

  For example, given the following lists:
  list_a: [1, 5, 27, 64]
  list_b: [2, 88, 4, 25]
  the final list would be:
  numbers: [1, 25, 64, 4, 25]
  [64, 25, 4, 1]
*/

function isCubic(number) {
  return Number.isInteger(Math.pow(Math.abs(number), 1 / 3));
}

function isSqure(number) {
  return Number.isInteger(Math.sqrt(number));
}

function mergeNumbers(firstList, secondList) {
  var cubic = firstList.filter(number => isCubic(number));
  var squre = secondList.filter(number => isSqure(number));
  return cubic.concat(squre).sort((a, b) => a > b ? -1 : 1);
}

module.exports = mergeNumbers;
