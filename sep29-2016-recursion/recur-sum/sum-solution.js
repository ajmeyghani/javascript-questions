module.exports = function sum (numbers) {
  if (numbers.length < 2) {
    return 0;
  }
  var isValidInput = numbers.every(n => typeof n === 'number');
  if (!isValidInput) {
    return NaN;
  }
  var firstNum = numbers[0];
  var secondNum = numbers[1];
  if (numbers.length === 2) {
    return firstNum + secondNum;
  }
  return firstNum + sum(numbers.slice(1));
};
