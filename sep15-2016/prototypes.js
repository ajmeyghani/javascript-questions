// linked objects
// ES5
// js links user to another object (behind the scenes)

// user.someMethod or user.someProp: if user itself doesnt have it will look for it in theother object.

var parent = {
  name: 'parent name'
};

var newObj = Object.create(parent); // hint: newObj is linked to the parent object.

newObj.myProp = 'cool prop';

// console.log(newObj.myProp);
// console.log(newObj.name);


// < ES5
// older way (using constructor)
// every function in JS, has a speial prop called prototype.
// which is used for linking objects.
function Animal() {

}

Animal.prototype.name = 'P';

// link myNewObj to another.

var myNewObj = new Animal(); // link myNewObj to Animal.prototype

// <another>: Animal.prototype

myNewObj.someProp = 'something';

console.log(myNewObj.someProp);
console.log(myNewObj.name);


















