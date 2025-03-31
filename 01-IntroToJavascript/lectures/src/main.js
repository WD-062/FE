console.log("Hello World");
console.log(2);
console.log(true);

// Primitive data types
console.log("String"); // String
console.log("String"); // String
console.log("I'm a string"); // String
console.log(`String`); // String
console.log(1); // Number
console.log(true); // Boolean
console.log(null); // Null
console.log(undefined); // Undefined
console.log(Symbol("symbol")); // Symbol
console.log(BigInt(123456789012345678901234567890)); // BigInt

//Complex data types
// arrays
console.log([1, 2, 3, "String", true, false]); // Array

// functions
function hello() {
  console.log("I am a function");
}
hello(); // Function

// objects
console.log({ name: "John", age: 30, isStudent: true }); // Object

// Variables
const firstName = "John"; // String
console.log(firstName); // String

// firstName = "Doe"; // TypeError // Cannot reassign a constant variable

let age = 30; // Number
console.log(age); // Number

age = 31; // Number
console.log(age); // Number

var isStudent = true; // Not recommended to use var
