console.log("Welcome To Tutorial 24");

let today = new Date();
// console.log(typeof today);
let otherDate = new Date("8-4-2003 04:54:18");
// sotherDate = new Date("16 June 1999");

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getHours();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getFullYear();
a = otherDate.getMonth();
a = otherDate.setDate(28);
a = otherDate.setMonth(11);
console.log(a);
console.log(otherDate);
