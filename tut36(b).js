console.log("Welcome to tutorial 34");

// Pretend that this response is coming from server
const students = [
  {
    name: "maaz",
    subject: "Javascript",
  },
  {
    name: "Ahmed",
    subject: "BlockChain",
  },
];
// call back function jo hai wo function ke ander function hota hai
// for example {for each function jo hai wo call back function hai}
// setTimeout  function jo hai wo ek callback function hai

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

function getStudent() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student has been fetched");
  }, 6000);
}
let newStudent = { name: "Sunny", subject: "React" };
enrollStudent(newStudent)
  .then(getStudent)
  .catch(function () {
    console.log("Some Error occured");
  });

// getStudent();
//  function inside then is ran as - resolve
//  function inside catch is ran as - reject
