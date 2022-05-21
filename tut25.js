console.log("This is tutorial 25");
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement("div");

// Add text to that created element
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("This is my element. click to edit it");
} else {
  text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border:2px solid black; width: 154px; margin: 34px; padding:23px;"
);

// Grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

// add event listener to the divElem
divElem.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
  }
  //listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});

// console.log("Welcome To Tutorial 25");
// /*
// You have to create a div element and inject it into
// the page which contains a heading . Whenever someone
// clicks on the div, it should be converted into an editable
// line. Whenever user clicks away (blur). save the note
// into local storage
// */

// let divElem = document.createElement("div");
// let container = document.getElementsByClassName(".container");
// let txt = document.createTextNode("This is a text that needs to be edit");
// divElem.setAttribute("id", "elem");
// divElem = divElem.addEventListener("click", function (e) {
//   divElem.onclick(e);
//   console.log(divElem);
// });
