console.log("Welcome To Tutorial 21");
/*
You have to create a div and inject it into the page
which contains a heading . Whenever someone clicks
on the div, it should be converted into an editable item
. whenever user clicks away  event(blur). save the note into the 
local storage
*/
let body = document.body;
let heading = document.createElement("h1");
heading.innerText = " This is the heading";
body.append(heading);

// creating the header and injecting it into the body
let div = document.createElement("div");
div.innerText = "This is the div";
div.id = "edit";
body.append(div);
document.getElementById("edit").addEventListener("click", () => {
  div.contentEditable = "true";
});
document.getElementById("edit").addEventListener("blur", () => {
  localStorage.setItem(
    "editable-div",
    document.getElementById("edit").innerText
  );
});

// // Creating the header and injecting it into body
// const body = document.body;
// const heading = document.createElement("h1");
// heading.innerText = "Welcome to My Website";
// body.append(heading);

// // Creating div and injecting into body
// const div = document.createElement("div");
// div.innerText = "This is an editable div";
// div.id = "edit";
// body.append(div);

// // Whenever user Clicks on the div
// document.getElementById("edit").addEventListener("click", () => {
//   div.contentEditable = "true"; // It will make the content inside the div editable
// });

// // Whenever user Clicks away from the div, save the content inside local storage
// document.getElementById("edit").addEventListener("blur", () => {
//   localStorage.setItem(
//     "editable-div",
//     document.getElementById("edit").innerText
//   ); // Saving the content inside local storage
// });
