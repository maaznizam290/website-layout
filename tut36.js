console.log("Welcome to the tutorial 36");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");
let fetchBtn = document.getElementById("fetchBtn");

// div with id content
let content = document.getElementById("content");

// Function for returning the text

// function getData() {
//   console.log("Started getData");
//   url = "../maaz.txt";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }

// Function for getting Json

// function getData() {
//   console.log("Started getData");
//   url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Inside second then");
//       console.log(data);
//     });
// }
function postData() {
  url = "https://jsonplaceholder.typicode.com/posts";
  data = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto     ",
  };
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
postData();
// console.log("Before running getData");
// console.log("After running getData ");
// Object ma semicolon nahi ata hai
// Fetch api jab use ho gi toh us ma 2 dafa then
// use hoga ek dafa response ko lane ma uske bad
// data ko lane ma (resposne aur data sirf is function ma use ho ga  )
