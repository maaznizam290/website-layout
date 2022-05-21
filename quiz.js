console.log("Welcome To Quiz");

function flour(eggs, bakingpowders, whitesugars) {
  this.eggs = eggs;
  this.bakingpowders = bakingpowders;
  this.whitesugars = whitesugars;
}

//  Slogan
flour.prototype.slogan = function () {
  return "My cake is the best";
};

//  Creates an object from this constructor now

let makes = new flour(233, 241, 125);
console.log(makes.slogan());

function cakes(eggs, bakingpowders, whitesugars, ovens, waters) {
  flour.call(this, eggs, bakingpowders, whitesugars);
  this.ovens = ovens;
  this.waters = waters;
}
// Inherit the prototype
cakes.prototype = Object.create(flour.prototype);

// Manually set the constructor
cakes.prototype.constructor = cakes;

let cooks = new cakes(123, 342, 322, 421, 234);
console.log(cooks);
