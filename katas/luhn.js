module.exports = function luhn(n) {
  const nums = String(n).split('').reverse().map(str => Number(str));
  var mod10Result = nums.map((n, idx) => {
    if (idx % 2 !== 0) {
      return n * 2;
    }
    return n;
  })
  .map(n => {
    if (n > 9) {
      return Math.abs(n - 9);
    }
    return n;
  })
  .reduce((s, val) => s + val) % 10;
  return !mod10Result;
};
