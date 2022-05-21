// Excercise 1
// You have to create a variable which is
// a string containing
// the text which is a link you are interested in.

// you have to fetch all the links from a given page
// which contains the text

let a = document;
a = document.links[0].href;
console.log(a);

a = Array.from(a);
a.forEach(function (element) {
  console.log(element);
});
