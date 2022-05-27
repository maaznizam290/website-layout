console.log("Welcome to the tutorial 38 (throw and catch tutorial)");

// Pretend this is coming from the server as a response
let a = "Maaz Bhai";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
  //   console.log("this is not undefined");
} else {
  console.log("this is udefined");
}
try {
  functionMaaz();
  console.log("We are inside try block");
} catch (error) {
  console.log(error);
  console.log("Are you okay?");
  //   console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Finally we will run this");
}

// finally jo hai wo lazmi run ho ga aur

// try ka matlab koshish karo
// catch ka matlab agar error agaya toh

// hum chate hain ke jo hamara program hai wo
// execution stop na karein kisi error ki waja see
// isi lie hum try catch block use karte hain
