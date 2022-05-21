console.log("Welcome To Tutorial 32");
// This is basically a async call and it will print the done printing on 100 seconds
setTimeout(() => {
  for (let index = 0; index < 4000; index++) {
    const element = index;
    console.log("This is index number" + index);
  }
}, 100);

console.log("done printing");
