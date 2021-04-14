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
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  Person.prototype.eat = function(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  }
  Person.prototype.poop = function() {
    this.stomach = [];
  }
  Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
  }
 
const person1 = new Person('Tony', 28);
// console.log("person1",person1);
// console.log("toString method",person1.toString());

// testing .eat(food) method
// Breakfast
person1.eat('eggs');
person1.eat('oatmeal');
person1.eat('sausages');
// console.log(person1.stomach); // [ 'eggs', 'oatmeal', 'sausages' ]

// additional foods to test effect for full stomach
// Lunch
person1.eat('steak');
person1.eat('garden salad');
person1.eat('potatoes');
person1.eat('squash');
// Dinner
person1.eat('breadsticks');
person1.eat('minestrone');
person1.eat('spaghetti');
person1.eat('pizza');
// Dessert
person1.eat('cheesecake');

// console.log(person1.stomach) // 'cheesecake' not added

// test .poop() method
person1.poop();
// console.log(person1.stomach); // []
  
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
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  Car.prototype.fill = function(gallons) {
    this.tank += gallons;
  }
  
  let car1 = new Car("BMW X3", 20);
  // console.log("car1", car1); // car1 Car { model: 'BMW', milesPerGallon: 20, tank: 0, odometer: 0 }

  // testing fill method
  
  car1.fill(13);
  // console.log(car1.tank); // 13

  
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
  Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
  }

  const baby1 = new Baby ("Jasper", "10months", "hot wheels");
  // console.log(baby1);  // Person { name: 'Jasper', age: '10months', stomach: [], favoriteToy: 'hot wheels' }
  // console.log(baby1.play()); // Playing with hot wheels
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window Binding: 'this' keyword used in the global scope, not in a declared object
    2. Implicit Binding: 'this' keyword used to refer to the name of a declared object
    3. New Binding: creating another object based off of 'this'(from constructor functions), using the 'new' keyword
    4. Explicit Binding: 'this' defined clearly, using call() and apply() methods
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}