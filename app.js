console.log("Welcome To Website");
let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0];
// console.log(a);
// Array.from(a).forEach(function (element) {
a = document.links[0].href;
// use document.images and document.scripts andprint the list of images and scripts on an
// html page
console.log(a);
// });
a = document.images;
b = document.scripts;

a = Array.from(a);
b = Array.from(b);

a.forEach(function (element) {
  console.log(element);
});
b.forEach(function (element) {
  console.log(element);
});
