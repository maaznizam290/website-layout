console.log("Welcome to the tutorial 37");
async function func() {
  console.log("Inside Maaz Function");
  const response = await fetch("https://api.github.com/users");
  console.log("Before response");
  const users = await response.json();
  console.log("Users resolved");
  return users;
  // return "Maaz";
}
console.log("Before calling Maaz");
let a = func();
console.log("After calling Maaz");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of this js file");

// async  jo hai wo promise ko return karta hai

// async wali promise return per resolve ho jaye
// gi aur phir a.then call ho ga

// async function ma jaha hum await likhte hain waha
// wo control phaunch kar baqi ki  js file ko execute kar de ga

// ye jo await wala kam hai ye asynchronously handle hota hai

// await ka matlab hai ke wapis chale jao aur ye return nahi ho
// ga

// Promise is lie pending show kar rahi hai kyun ke wo resolve nahi hui
// hai aur promise jab resolve ho gi jab function khatam ho ga
