/*
  Recursion in JavaScript
 */

function sum () {
  /*
    Convert the arguments object to
    an array of arguments.
   */
  var args = Array.from(arguments);
  /*
    The first and the second arguments.
   */
  var x = args[0];
  var y = args[1];
  /*
    The base case.
   */
  if (args.length === 2) { return x + y;}
  else {
    /*
      The general definition.
      In every step we are passing the a new
      slice of the arguments:
      1st: [1,2,3,4,5]
      2nd: [2,3,4,5]
      3rd: [3,4,5]
      4th: [4,5]
     */
    return x + sum.apply(null, args.slice(1));
    /*
      The apply method, spreads the arguments:
        Instead of passing the parameters one by one,
        you can call the function with apply and pass
        in the arguments as an array.
        `sum.apply(null, [1,2,3,4]);` is the same as:
        `sum(1,2,3,4);`
     */
  }
}

var result = sum(1,2,3,4,5);
console.log(result);

/**
 * 1st Iteration: sum(1,2,3,4,5): 1 + sum(2,3,4,5)
 * 2nd Iteration: sum(2,3,4,5)  : 2 + sum(3,4,5)
 * 3rd Iteration: sum(3,4,5)    : 3 + sum(4,5)
 * 4th Iteration: sum(4,5) -> 9
 *
 * After the last iteration (after hitting the base case)
 * previous steps get evaluated (all stacks are poped)
 * When the stack frame is poped, the result is passed
 * all the way to the first step of the iteration.
 *
 * 1st Iteration: sum(1,2,3,4,5): 1 + sum(2,3,4,5) = 1 + 14 = 15
 * 2nd Iteration: sum(2,3,4,5)  : 2 + sum(3,4,5) = 2 + 12 = 14
 * 3rd Iteration: sum(3,4,5)    : 3 + sum(4,5) = 3 + 9 = 12
 * 4th Iteration: sum(4,5) -> 9
 *
 * In the reverse order, the vales gets evaluated until
 * it the first stack frame is poped and the result is
 * returned.
 *
 */
