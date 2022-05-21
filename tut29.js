console.log("Welcome To Tutorial 29");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and I am the best`;
  }
  JoiningYear() {
    return 2019 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}
// Inheritance
// super ka matlab pichli class ka constructor

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
  }

  favorite() {
    if (this.language == "python") {
      return "python";
    } else {
      return "javascript";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}
// Inheritance ka matlab hai ek template ki madad see dusra template bana lena
// static method wo hai jo bina class ka object banaye use
// kar sakte hain
// maaz = new Employee("maaz", 12, "hee");
// console.log(maaz.JoiningYear());
// console.log(22 + 33);
// Constructor wo function hai wo jab run hota hai
// jab class ka object ban raha hai

maaz = new Programmer("maaz", 2, "kays", "Go", "maaz33");
console.log(maaz);
console.log(maaz.favorite());
console.log(Programmer.multiply(3, 2));
