// scope

function fn() {
  var x = 1;
  var y = 2;
  // but parent (fn) cannot see the content of g.
  function g() {
    var z = 99;
    // inner function can see the content of the outer function
    // but the parent CANNOT.
    // child can see x, and y.

  }
}

