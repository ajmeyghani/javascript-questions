/**
 * Given two paris, check if they overlap.
 * @param  {object} p1 object representing the first pair
 * @param  {object} p2 representing the second pair
 * @return {boolean}   true if they overlap, false if they dont
 */
function doIntersect(p1, p2) {
  var x = p1.s; var y = p1.e;
  var xp = p2.s; var yp = p2.e;
  return (xp > x && xp < y) || (yp > x && yp < y);
}

/**
 * Given two paris, merge the two pairs, outputing one pair
 * @param  {object} p1 the first pair of values
 * @param  {object} p2 the second pair of values
 * @return {object} merged  the merged pair
 */
function merge(p1, p2) {
  var endpoints = [p1.e, p2.e];
  var maxEndpoints = Math.max.apply(null, endpoints);

  var startingPoints = [p1.s, p2.s];
  var minStartingPoint = Math.min.apply(null, startingPoints);
  return {s: minStartingPoint, e: maxEndpoints};
}

/**
 * Given a list of pairs, if two pairs overlap
 * merge them, and use the result to check with the next item.
 * if not, just move on to the next item.
 * @type {Object}
 */
var fixtureList = [{s: 1, e: 3}, {s: 2, e: 6}, {s: 8, e: 10}, {s: 15, e: 18}];
function mergeOverlaps(listOfPairs) {
  var allPairs = listOfPairs.slice(0).sort((p1, p2) => (p1.s < p2.s ? -1 : p1.s > p2.s ? 1 : 0));
  allPairs.forEach(function(pair, idx) {
    if (Boolean(allPairs[idx + 1])) {
      var p1 = allPairs[idx];
      var p2 = allPairs[idx + 1];
      if (doIntersect(p1, p2)) {
        allPairs[idx] = merge(p1, p2);
        allPairs.splice(idx + 1, 1);
      }
    } else {
      return;
    }
  });
  allPairs.toString = () => {
    return allPairs.map(item => '(' + item.s + ',' + item.e + ')').join(', ');
  };
  return allPairs;
}
console.log(String(mergeOverlaps(fixtureList)));

// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].
