console.log("Welcome To Tutorial 30");

class Bike {
  constructor(number, light, seat) {
    this.number = number;
    this.light = light;
    this.seat = seat;
  }
  slogan() {
    return `This is a very good bike ${this.number} number `;
  }
  static add(a, b) {
    return a + b;
  }
}
// console.log(Bike.add(4, 4));
// Harley = new Bike(12, "Harley", "Best");
// console.log(Harley);
// console.log(Harley.slogan());

class Motorcycle extends Bike {
  constructor(number, light, seat, horn, silencer) {
    super(number, light, seat);
    this.horn = horn;
    this.silencer = silencer;
  }
  besthorns() {
    if (horn == "yellow") {
      return "this is the best horn";
    } else {
      return "this is not the best horn";
    }
  }
  static divide(a, b) {
    return a / b;
  }
}
Davidson = new Motorcycle(13, "brand", "set", "yellow", "japani");
console.log(Davidson);
console.log(Motorcycle.divide(6, 2));
