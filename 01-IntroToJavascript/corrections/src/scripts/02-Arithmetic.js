// Declaring variables
let num = 5;
let strNum = "5";

console.log(typeof num); // number
console.log(typeof strNum); // string

// Addition
let additionResult = num + strNum; // 55 (string concatenation)
console.log("Concatenation: ", additionResult); // 55
console.log(typeof additionResult); // 55
let additionResultNum = num + Number(strNum); // 10 (number addition)
console.log("Addition: ", additionResultNum); // 10

// Subtraction
let substractionResult = num - strNum; // 0 (string converted to number)
console.log("Substraction: ", substractionResult); // 0

// Multiplication
let multiplicationResult = num * strNum; // 25 (string converted to number)
console.log("Multiplication: ", multiplicationResult); // 25

// Division
let divisionResult = num / strNum; // 1 (string converted to number)
console.log("Division: ", divisionResult); // 1

// Modulus
let modulusResult = num % strNum; // 1 (string converted to number)
console.log("Modulus: ", modulusResult); // 1

// Perform a Series of Numeric Operations

let num1 = 10;
let num2 = 20;
let num3 = 30;

// Addition
let sum = num1 + num2 + num3;
console.log("Sum: ", sum); // 60

// Subtraction
let difference = num3 - num2 - num1;
console.log("Difference: ", difference); // -40

// Multiplication
let product = num1 * num2 * num3;
console.log("Product: ", product); // 6000

// Potence
let power = num1 ** 2; // 100

// Division
let quotient = num3 / num1;
console.log("Quotient: ", quotient); // 3

//Modulus
let remainder = num3 % num2;
console.log("Remainder: ", remainder); // 10
