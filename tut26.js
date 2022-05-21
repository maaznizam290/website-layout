console.log("Welcome To Tutorial 26");

// Object literal : Object.prototype

// Object ek unique identity hoti hai jis ma
// properties aur methods hote hain

// Object Literal for creating objects
let car = {
  name: "Mercedes",
  topspeed: 233,
  run: function () {
    console.log("hello mercedes is running");
  },
  stop: function () {
    console.log("Hello mercedes is stop");
  },
};

//We have already seen the constructors like these
// new Date();

// Creating a constructor for cars
function GeneralCar(givenname, givenspeed) {
  this.name = givenname;
  this.topspeed = givenspeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyze = function () {
    console.log(
      `This is car is slower than ${200 - this.topspeed}km by Mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", "189");
car2 = new GeneralCar("Alto", "168");
car3 = new GeneralCar("Jaguae", "100");
console.log(car1);
console.log(car2);
console.log(car3);
