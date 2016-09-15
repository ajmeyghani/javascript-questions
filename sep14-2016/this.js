// global object
// function fn() {
//   console.log(this);
// }

// fn();


var user = {
  name: 'tom',
  getName: function() {
    return this.name; // this is bound to (user) the function is called in the context of user
  },
  firm: {
    name: 'AKX',
    getType: function() {
      return this.name; // this?
    }
  }
};
// the context is the user object.
var n = user.getName();
var f = user.firm.getType(); // f
console.log(n);
console.log(f);

// simple ()
var acc = {
  balance: 55,
  getBalance: function() {
    return this.balance;
  }
};

function g(x,y,z) {

}
g(1,2,3); // simple way

g.call(acct, 1,2,3);

g.apply(acct, [1,2,3]);

















