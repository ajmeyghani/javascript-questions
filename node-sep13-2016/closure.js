/////////////// what is a closure? //////////

function fn() {
  var x = 0;
  function g() {
    // inner ffun is using the parent variable
    // in memeory it has to make the ref.
    return x += 1; // inner fn is ref outer values
  }
  return g;
}

//

var g = fn(); // what is r?
var a = g(); console.log(a); // 1
var b = g(); console.log(b); // 2
var c = g(); console.log(c); // 3

// practical: inf scroll to call at the bottom of page.
