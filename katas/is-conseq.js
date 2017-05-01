/*
 * given a list of numbers, find out which one
 * is missing in the sequence:
 * eg: [1,2,4,5] -> 3 is missing
 * The `some` method stops going through the list when
 * you return `true` in the callback function.
 */
module.exports = function validate(list) {
  var missing;
  list.some((v, i) => {
    if (list[i + 1]) {
      if(list[i + 1] !== list[i] + 1) {
        missing = list[i] + 1;
        return true;
      }
    }
  });
  return missing;
};
