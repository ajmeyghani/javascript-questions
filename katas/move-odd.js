module.exports = function moveOdd(arr) {
  if (!arr.length) {
    return [];
  }
  const tArr = arr.map(n => n % 2 === 0 ? n : 'x');
  const sortedOdds = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  var tx = 0;
  tArr.forEach((n, idx) => {
    if (n === 'x') {
      tArr[idx] = sortedOdds[tx];
      tx += 1;
    }
  });
  return tArr;
};

/*
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
*/