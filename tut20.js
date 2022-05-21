console.log("Welcome To Tutorial 20");
// let arr = ["tarboox", "kela", "seb"];
let arr1 = ["sam", "club", "hel", "hew"];
//           Local Storage

// Javascript ma agar hum local storage ma kuch
// store karwa lein toh wo hum usko bad ma read
// kar sakte hain key aur value dete hain toh
// usma value save ho jati hai key ke andar

//           Session Storage

// Session storage jo hai wo session ke liye valid hota hai
// aur jaise he browser close hota hai toh wo
// khatam ho jati hain

// Add a key value inside localStorage

localStorage.setItem("name", "maaz");
localStorage.setItem("name2", "nizam");
localStorage.setItem("mobile", JSON.stringify(arr1));
localStorage.setItem("phal", JSON.stringify(arr));

localStorage.removeItem("name");
// localStorage.clear()=>Clears the entire local storage
// localStorage.clear();

// Retrieve an item from local storage

let Name = localStorage.getItem("name");
Name = JSON.parse(localStorage.getItem("phal"));
console.log(Name);

let Mob = localStorage.getItem("mobile");
Mob = JSON.parse(localStorage.getItem("mobile"));
console.log(Mob);
// JSON.parse is used to convert the string into object

// Aur JSON.stringify() jo hai wo object ko string ma covert krta hai

// Alag alag website ka apna apna localStorage hota hai

sessionStorage.setItem("sessionName ", "maaz");
