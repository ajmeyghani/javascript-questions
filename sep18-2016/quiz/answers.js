/*
  - Write a function called isNumberEven that takes an
  input and returns a boolean. If the input is an event number
  it will return true, otherwise it will return false. If the
  input is not a number, the function returns NaN.
*/

function isNumberEven(n) {
  if (typeof n !== 'number') {
    return NaN;
  }
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


/*
  - Write a function called getLoggedInUsers that takes
  an array of user objects and return an array of user
  objects that are only logged in. Each user object has
  the following structure:

  {
    id: <number>,
    name: <string>,
    isLoggedIn: <boolean>
  }
*/

function getLoggedInUsers(users) {
  return users.filter(u => u.isLoggedIn);
}


/*
  - write a function called makeSentence that takes variadic
  number of single string inputs and create a sentence out
  of them by putting a space after each. For example:

  makeSentence('hello', 'world'); -> 'hello world'
  HINT: you may find the forEach method useful.
  also make sure that there are not extra spaces
  at the end of the sentence.
*/

function makeSentence() {
  var words = Array.from(arguments);
  var sentence = '';
  words.forEach(word => sentence += word + ' ');
  return sentence.trim();
}

console.log(makeSentence('hello', 'world', 'eveyone'));


/*
  - Write a Car class (Car constructor function) that defines a
  car object with two properties: gasAmout, and model. The Car
  constructor will take a single options object that contains
  the gasAmount and model value for the car to be instantiated with.
  The car instances will also have a move method that will increase the gas
  value by 5 whenever called. In addition to move, the car object will
  have a shared method called getModel that will return the name of
  the model. Notice that the properties are specific to the instance
  and the methods are shared among car objects via the Car's prototype.
  You may also want to add a getGas method to return the amount of gas
  in the car.
*/

function Car(opts) {
  if (!(this instanceof Car)) {
    return new Car(opts);
  }
  var settings = opts || {
    gasAmout: 0,
    model: ''
  };
  this.gasAmout = settings.gasAmout;
  this.model = settings.model;
}

Car.prototype.move = function() {
  this.gasAmout += 5;
};

Car.prototype.getModel = function() {
  return this.model;
};

Car.prototype.getGas = function() {
  return this.gasAmout;
};

var myCar = new Car({gasAmout: 5, model: 'Toyota'});
console.log(myCar.getGas(), myCar.getModel());
myCar.move();
myCar.move();
console.log(myCar.getGas(), myCar.getModel());


/* - Writes a function called mapNameToAge
     that takes an array as input
     and returns a plain object that uses the first
     element of the array as the key and the second
     value as the value. For example:
     ['tom', 25, 'kate', 34] -> {tom: 25, kate: 34}
     HINT: You may find the forEach method useful!
     You may wanna return an empty object if the input
     list is not valid.
*/

function mapNameToAge(nameAgePairs) {
  var isValidInput = isNumberEven(nameAgePairs.length) && Array.isArray(nameAgePairs);
  if (!isValidInput) {
    return {data: '', message: 'INVALID_INPUT'};
  }
  var nameAgeMap = {};
  nameAgePairs.forEach((pair, idx) => {
    if(nameAgePairs[idx * 2]) {
      nameAgeMap[nameAgePairs[idx * 2]] = nameAgePairs[idx * 2 + 1];
    }
  });
  return nameAgeMap;
}

var mapped = mapNameToAge(['tom', 25, 'kate', 34, 'pete', 99]);
console.log(mapped);



