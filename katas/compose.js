/*
Make a compose function with the following form:

f,g => x => f(g(x))

Then write a curried version of add function.

Then write a function called mult5 that multiplies its input by 5.

Compose the add function with mult5 to produce a function that
multiplies the input by 5 after adding 10 to it.
*/

const compose = (f, g) => x => f(g(x));
const add = a => b => a + b;
const mult5 = a => a * 5;

const add10 = add(10);
const mult5AfterAdd10 = compose(mult5, add10);

// when compose is called, a new function is created
// that take a single parameter, when this function
// is called, the input is first passed to add10 -> x + 10
// and the result of that is called by mult5:
// mult5(x + 10). If x = 2, then mult5(2 + 5) -> mult5(7) -> 35.


module.exports = mult5AfterAdd10;
