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
const mult5AfterAdd10 = compose(mult5, add(10));

module.exports = mult5AfterAdd10;
