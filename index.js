/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
  return this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  return this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('Chris', 38);
const personTwo = new Person('Victor', 20);
const personThree = new Person('Mike', 36);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personThree.eat('truffle fries');
personThree.eat('truffle pasta');
personThree.eat('mushroom risotto with extra truffle');

console.log(personThree.stomach);

personThree.poop();

console.log(personThree.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model,milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons){
  this.tank += gallons;
};

Car.prototype.drive = function(distance){
  if (distance / this.milesPerGallon >= this.tank){
    this.odometer = this.odometer + this.tank * this.milesPerGallon;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
  this.tank -= distance / this.milesPerGallon;
  this.odometer += distance;
};

const myCar = new Car({
  model: '2019 Hyundai Elantra GT',
  milesPerGallon: 32,
});

console.log(myCar.tank);
myCar.fill(14);
console.log(myCar.tank);
myCar.drive(20);
console.log(myCar.tank+ ` ` +myCar.odometer);
myCar.drive(20);
console.log(myCar.tank + ` ` + myCar.odometer);
console.log(myCar.drive(448));

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
};

const newBaby = {
  name: 'Chris',
  age: 2,
  favoriteToy: 'Transformer',
};

const myBaby = new Baby(newBaby);
console.log(myBaby.toString());
console.log(myBaby.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
1. Windows Binding is esentially the global "scope" of the keyword. If no other rules are applied, this will be returned.
2. Implicit Binding is the most common rule. On an invoked function it you can look to the left of the dot to see what 'this' will refer to. It only applies to objects with methods.
3. Explicit Binding are able to immediately invoke the function. .call will pass in arguments 1 at a time. .apply will pass in arguments as an array.
4. New Binding will construct a new object based on the new keyword and 'this' will point to it. When a function is invoked as a constructor along with this., it will point to the new object that's created.  
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
