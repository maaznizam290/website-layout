console.log("Welcome To Tutorial 16");
let element = document.createElement("li");
let text = document.createTextNode("Hello this is Maaz");
element.appendChild(text);

// Add a class name to 1i element
element.className = "childul";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
// elelment.innerText = "Hello this is maaz";
// elelment.innerHTML = "<b> Hello this is maaz </b>";
// Hum koi bhi attribute set kr sakte hain aur
// usko print krwa sakete hain console ke andar

let ul = document.querySelector("ul.this");
ul.appendChild(element);
// appendChild => ye hota hai jo child ko append kr deta hai
// DOM ke andar
// console.log(ul);
// console.log(elelment);

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is the created node for elem2");
elem2.appendChild(tnode);

// elelment.replaceWith(elem2);
// // replaceWith => this is the function which is use to replace the elements
// let elem3 = document.createElement("h4");
// elem3.id = "elem3";
// elem3.className = "elem3";
// let tnode1 = document.createTextNode("Hello Moto");
// elem3.appendChild(tnode1);

element.replaceWith(elem2);

let myul = document.getElementById("myul");
// myul.replaceChild(element, document.getElementById("fui"));
myul.replaceChild(element, document.getElementById("fui"));
// myul.removeChild(document.getElementById("lui"));
let pr = elem2.hasAttribute("");
// elem2.removeAttribute("id");
elem2.setAttribute("title", "hwfwwr");
console.log(elem2, pr);

// hasAttribute => It tells whether the attribute is present or not
// in the form of true or false

// quick quiz
// create a heading element with text as "Go to code with harry " and create a tag
// outside it with href = "www.facebook.com"

let elem4 = document.createElement("h2");
let text1 = document.createTextNode("Go To code with harry");
element.setAttribute("href", "www.facebook.com");
elem4.appendChild(text1);
console.log(elem4);
console.log(element);
