// ES5

function greet() {
  console.log("Hello, World!");
}

greet();
const students = ["John", "Jane", "Jim", "Jack", "Jill"];

const coworkers = ["Jim", "Jack", "Jill"];

const person = "John";

// Parameters and Arguments
function greeting(person) {
  console.log(`Hello, ${person}!`);
}

function greetingStudents(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Hello ${array[i]}`);
  }
}

// greeting(1);
// greeting("John");
// greeting(students[4]);
// greeting(person);

// greetingStudents(students);
// greetingStudents(coworkers);

function greets(greeting, person) {
  console.log(`${greeting}, ${person}!`);
}

greets("Hello", "John");
greets("Good morning", "Jane");

// Function Expression

const greetPersonExpresion = function () {
  console.log("Hello, World!");
};

greetPersonExpresion();
