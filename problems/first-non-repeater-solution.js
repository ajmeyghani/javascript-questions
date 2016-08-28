/*
  Given the following string, find the first
  non-repeating word. In this case the letter is 'd'.
*/

var input = 'aardvark'; // -> d

var letters = input.split('');
var letterWithCount = {};

letters.forEach(l => {
  l in letterWithCount ? letterWithCount[l] +=1 : letterWithCount[l] = 1;
});

var firstLetter = '';
Object.keys(letterWithCount).some(l => {
  var isNonRep = letterWithCount[l] < 2
  if (isNonRep) {
    firstLetter = l;
  }
  return isNonRep;
});

console.log(firstLetter);
