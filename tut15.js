console.log("Welcome to tutorial 15");

let cont = document.querySelector(".no");
cont = document.querySelector(".container");
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);
// Node Types
// 1. Elements
// 2. Attributes
// 3.Text Node
// 8. Comment
// 9. document
// 10. docType
// console.log(cont.childNodes);
// console.log(cont.children);
// Jo hamara child node hota hai wo hamare text ko
// aur comment ko display karwaye ga

// Jo hamara children hai wo hamare comments ko nahi
//  text ko nahi  ye sirf elements ko display karwaye
// ga (like div , h1, ul,li and forms & etc)
// Most of the times children use hota hai jab hum website
// ke sath kam karein ge

let container = document.querySelector(".container");
// console.log(container.children[1].children);
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.children);

// console.log(container.childElementCount);
// childElementCount --> count of childelements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
