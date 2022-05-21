console.log("Welcome To Tutorial 28");

const proto = {
  slogan: function () {
    return "This company is the best";
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// This creates Maaz Object
// const maaz = Object.create(proto);
// maaz.name = "Maaz";
// maaz.role = "Developer";

//  This also creates Maaz Object
const maaz = Object.create(proto, {
  name: { value: " Maaz", writable: true },
  role: { value: "Programmer" },
});
maaz.changeName("Maaz2");
// console.log(maaz);

function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}
// Slogan
Employee.prototype.slogan = function () {
  return `This company is the best. Regards, ${this.name}`;
};

// Creates an object from this constructor now

let maazObj = new Employee("Maaz", 2222, 12);
console.log(maaz);

function programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}
// Inherit the prototype
programmer.prototype = Object.create(Employee.prototype);

//  Manually set the constructer
programmer.prototype.constructor = programmer;

let haris = new programmer("Haris", 24, 1, " javascript");
console.log(haris);

/*
The task for the quiz is that I have to firstly create
the object of food than I have to inherit from food and 
than make it as cake 

food is for example as flour

matlab hai isma hamein ek cake name ki class banani hai aur
ek flour name ki class banani hai





*/
