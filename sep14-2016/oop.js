// OOP: classes

// object: represents an entity: user, table, desk, account
// methods, props

var user = {
  name: 'Tom'
};

var user1 = {};

var user2 = {};

// class -> object
// class is a definition of the object

// class: crawling
// class: dom nodes

// classes: user, data
// definition



// create a function and that function will create objects
// defines a user type
// defining a custom type (User)
// constructor function
function User(name, age, username) {
  // properties
  this.name = name;
  this.age = age;
  this.username = username;

  // method
  this.type = function() {
    return 'user';
  };
}
// userName, animal

var u1 = new User('Tom', 22, 'tomelx');
var u2 = new User('John', 23, 'johntx');

// console.log(u1);

var result = u1.type();
var result2 = u2.type()

console.log(result);
console.log(result2);

// monster type (class)
function Monser () {
  this.roar = function () {

  };
}

var m1 = new Monser(); //

