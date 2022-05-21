console.log("Welcome to tut14");
/*
element selectors:
1. Single element selector
2. Multi element selector


*/
// Single Element Selector
let element = document.getElementById("myfirst");
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
// element.innerText = "Maaz Is A Good Boy";
element.innerHTML = "<i> Maaz Is A foddd</i> ";
// console.log(element);

let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child");
sel = document.querySelector("div");
sel.style.color = "yellow";
console.log(sel);
// # is denoted for the id
//  & . is denoted for class

// 2. Multi Element Selector

// ye DOM ma see multiple elements select krta hai aur hum in multiple elements
// ko iterate kar sakte hain

let elems = document.getElementsByClassName("child");
elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div");
console.log(elems);

for (let index = 0; index < elems.length; index++) {
  const element = elems[index];
  console.log(element);
  element.style.color = "green";
}

// Array.from(elems).forEach((element) => {
//   console.log(element);
//   element.style.color = "green";
// });

// console.log(elems[0].getElementsByClassName("child"));
// matlab ye pehla wala display karwa de ga is ma index see bhi hum display krwa sakte hain
// jaise ke elems[0] ko agar hum console.log karein th ye pehle wale element ko display karwa de ga
