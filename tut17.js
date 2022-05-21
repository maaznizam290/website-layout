console.log("Welcome To Tutorial 17");

document.getElementById("heading").addEventListener("click", function (e) {
  let variable;
  console.log("You have clicked on the heading");
  variable = e.target.className;
  variable = Array.from(e.target.classList);
  //   variable = e.clientX;
  //   variable = e.clientY;
  //   variable = e.offsetY;
  //   offsetX => ye jo hai wo element ke relative ma bataye ga mjhe ke ma ne kaha click kia hai
  //   variable = e.target.id;
  console.log(variable);
});
