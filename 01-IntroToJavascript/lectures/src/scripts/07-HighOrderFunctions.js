// ES5
function greet(name) {
  console.log(`Hello ${name}`);
}

// console.log(greet("John"));

// ES6 or arrow function
const greetArrow = (callback) => {
  return callback();
};

// console.log(greetArrow(greet))
// console.log(greetArrow(() => greet("John")));

// const greetArrowOneLine = (name) => `Hello ${name}`;

const students = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Jack", age: 30 },
];

function getStudentNames(students) {
  for (let i = 0; i < students.length; i++) {
    greet(students[i].name);
  }
}

// getStudentNames(students);

// ForEach
students.forEach((student) => console.log(`Hello ${student.name}`));
// students.forEach((student) => greet(student.name));

// Map
students.map((student) => greet(student.name));

// Filter
const filteredArray = students.filter((student) => student.age < 30);
console.log(filteredArray);

filteredArray.forEach((student) => console.log(`Hello ${student.name}`));
students
  .filter((student) => student.age < 30)
  .map((student) => console.log(`Hello ${student.name}`));

// Find
const foundStudent = students.find((student) => student.age === 30);
console.log(foundStudent);