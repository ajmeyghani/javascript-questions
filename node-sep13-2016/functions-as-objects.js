// functions are values

var a = 2;
var x = function () {}; // function is a value


// function sum (a, b) {}

// sum(1,2);

// sum(function() {}, function() {});

function fn(f, x) {
  f(x); // f here is a callback
}


fn(function(a) { console.log(a); }, 5);



// async: not synchronous

// sync: in order
// async: not order


// js is single-threaded, with a lot of scheduling (event loop)

setTimeout(function() {}, 1000);

















