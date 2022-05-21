console.log("Welcome To Tutorial 27");

//  Object literal : Object.prototype

let obj = {
  FirstName: "Muhammad",
  LastName: "Maaz",
  Address: "Karachi",
};
function Obj(givenName) {
  this.FirstName = givenName;
}
Obj.prototype.getName = function () {
  return this.FirstName;
};
Obj.prototype.setName = function (newName) {
  this.name = newName;
};
let obj2 = new Obj("Maaz");
console.log(obj2);
// console.log(obj2.toString());

//  prototype ka matlab jaha see hum object banatte hain

// Jab hum constructor banate hain toh uska alag
// prototype hota hai iska bhi alag prototype hai
// jo function Obj see shuru ho raha hai
