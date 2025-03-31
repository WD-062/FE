// <
// >
// == => simple equality, checks only for value
// === => strict equality, checks for value and type
// != => not equal, checks only for value
// !== => strict not equal, checks for value and type

let a = 5;
let b = "5";
let c = 5;
let d = "10";

console.log(a == b); // true
console.log(a === b); // false

console.log(a != b); // false
console.log(a !== b); // true

console.log(a != c); // false
console.log(a !== c); // false

console.log(a != d); // true
console.log(a !== d); // true



console.log(a < c); // false
console.log(a > c); // false

console.log(a >= c); // true
console.log(a <= c); // true