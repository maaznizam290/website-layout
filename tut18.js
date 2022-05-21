console.log("Welcome To Tutorial 18");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", func1);
// btn.addEventListener("dblclick", func2);
// btn.addEventListener("mouseup", func4);

// // btn.addEventListener("mousedown", func3);

// const preventdefault = document.getElementById("preventdefault");
// function func1(e) {
//   console.log("Thanks", e);
//   e.preventdefault();
// }

// function func2(e) {
//   console.log("Thanks its a double click", e);
//   e.preventdefault();
// }

// // function func3(e) {
// //   console.log("Thanks its a mouse down", e);
// //   e.preventdefault();
// // }

// function func4(e) {
//   console.log("Thanks its a mouse up", e);
//   e.preventdefault();
// }

// document.querySelector(".no").addEventListener("mouseenter", function () {
//   console.log("You entered the no");
// });

// document.querySelector(".no").addEventListener("mouseleave", function () {
//   console.log("You exited the no");
// });

document
  .querySelector(".container")
  .addEventListener("mouseover", function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},159)`;
    console.log("You triggered the mouse");
  });
