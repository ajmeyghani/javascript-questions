/* Filter
  ----------
  Given the following array, filter out all the users
  who are older than 20 years old.
  The output for the given array would be:
  [
    { id: 1, name: 'Tom', age: 25 },
    { id: 2, name: 'Jon', age: 22 }
  ]
*/

var users = [
  { id: 1, name: 'Tom', age: 25 },
  { id: 2, name: 'Jon', age: 22 },
  { id: 3, name: 'Kate', age: 18 },
  { id: 4, name: 'Kim', age: 19 }
];

/* solution */
var olderThan20 = users.filter(function(user) {
  return user.age > 20;
});

console.log(olderThan20);

/*
 Sort (1)
 Another important method on arrays is the sort method. Use the sort
 method to sort the following numbers in descending order (i.e. largest to smallest)
 The expected output is: [9, 5, 1, 0]
 Be careful, the sort method mutates the original array so make sure that you make
 a copy using `slice(0)` first.
*/

var nums = [5, 0, 1, 9];

/* solution */
var sortedNums = nums.slice(0).sort(function(n1, n2) {
  return n1 > n2 ? -1 : n1 < n2 ? 1 : 0;
});

console.log(sortedNums);

/*
  Sort (2):
  ----------
  Use the sort method to sort the users array above from youngest to oldest. Be careful,
  the sort method mutates the original array, so make sure to make a
  copy of the array first using `users.slice(0)`.
*/

/* solution */
var sortedUsers = users.slice(0).sort(function(a, b) {
  return a.age < b.age ? -1 : a.age > b.age ? 1 : 0 ;
});

console.log(sortedUsers);


/*
  Reduce
  ----------
  Write a function called `isAllTrue` to check if a given array of booleans are all true values or not.
  Here are some input and output examples:
  [true, true, false] -> false (not all of them are true, therefore, the false output.)
  [true, true, true] -> true (all of them are true)
  [true, true, true, true, false] -> false (not all of them are true, therefore, the false output.)
*/

function isAllTrue(arr) {
  return arr.reduce(function(r, val) {
    return r && val;
  });
}

console.log(isAllTrue([true, true, false])); // -> false
console.log(isAllTrue([true, true, true])); // -> true
console.log(isAllTrue([true, true, true, true, false])); // -> false

/*
 Closure
 Create a function that is immediately called:
 http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
 this is also known as an IIFE
*/

/* solution */
var result = (function() {
  return 2;
}());
console.log(result);


/*
 Closure
 ----------
 Use a closure to hide variables and functions from the global scope.
 This is also known as the module pattern
*/

/* solution */
var testModule = (function() {

  var counter = 0;

  return {

    incrementCounter: function() {
      return counter++;
    },

    resetCounter: function() {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };

})();

 
// Usage:

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();



/*
 Closure
 ----------
 Use a closure to create some private and public properties and methods.
 This is also known as the revealing module pattern:
 https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
*/

/* solution */
var myRevealingModule = (function() {

  var privateVar = "Ben Cherry";
  var publicVar = "Hey there!";

  function privateFunction() {
    console.log("Name:" + privateVar);
  }

  function publicSetName(strName) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // Reveal public pointers to
  // private functions and properties

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };

})();

myRevealingModule.setName("Paul Kinlan");
