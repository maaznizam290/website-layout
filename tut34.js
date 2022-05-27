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

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 1000);
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
enrollStudent(newStudent, getStudent);
// getStudent();

// call backs functions can be synchronous and also be asynchronous

// forEach function hai wo synchronous hota hai
