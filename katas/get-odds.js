/*
Write a function that takes an array of elements as the input,
and returns all the elements on the odd positions in a new array. If the
input array is empy, we will return an empty array.
For example:
 given: ["apple", "hello", "orange", "world"], outputs: ["hello", "world"]
*/

function getOdds(items) {
  return items.filter((item, idx) => idx % 2 !== 0);
}

module.exports = getOdds;

