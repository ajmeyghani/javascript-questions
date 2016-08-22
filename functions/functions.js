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


/*
 Sort (1)
 ----------
 Another important method on arrays is the sort method. Use the sort
 method to sort the following numbers in descending order (i.e. largest to smallest)
 The expected output is: [9, 5, 1, 0]
 Be careful, the sort method mutates the original array so make sure that you make
 a copy using `slice(0)` first.
*/

var nums = [5, 0, 1, 9];


/*
  Sort (2)
  ----------
  Another important method on arrays is the sort method. Use the sort
  method to sort the users array above from youngest to oldest. Be careful,
  the sort method mutates the original array, so make sure to make a
  copy of the array first using `users.slice(0)`.
*/


/*
  Reduce
  ----------
  Write a function called `isAllTrue` to check if a given array of booleans are all true values or not.
  Here are some input and output examples:
  [true, true, false] -> false (not all of them are true, therefore, the false output.)
  [true, true, true] -> true (all of them are true)
  [true, true, true, true, false] -> false (not all of them are true, therefore, the false output.)
*/

/*
 Closure
 ----------
 Create a function that is immediately called:
 http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
 this is also known as an IIFE
*/

/*
 Closure
 ----------
 Use a closure to hide variables and functions from the global scope.
 This is also known as the module pattern
*/

/*
 Closure
 ----------
 Use a closure to create private methods an properties and only
 expose one public method. This is also known as the revealing
 module pattern: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript
*/
