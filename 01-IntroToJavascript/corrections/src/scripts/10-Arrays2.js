// 1. ForEach Loop

//1.1
const numbers = [1, 2, 3, 4, 5];
//1.2.
numbers.forEach((number) => console.log(number));
//1.3.
let sum = 0;
numbers.forEach((num) => (sum += num));
console.log(sum); // 15

// 1.4.
const squaredNumbers = [];

numbers.forEach((num) => squaredNumbers.push(num * num));

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// 2. Map Method
// 2.2.
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 2.3.
const stringifiedNumbers = numbers.map((num) => `Number: ${num}`);
console.log(stringifiedNumbers); // ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

//2.4.
const objectifiedNumbers = numbers.map((num) => ({
  original: num,
  squared: num * num,
}));
console.log(objectifiedNumbers); // [{ original: 1, squared: 1 }, { original: 2, squared: 4 }, { original: 3, squared: 9 }, { original: 4, squared: 16 }, { original: 5, squared: 25 }]

// 3. Find Method
// 3.1.
const numbers2 = [10, 20, 30, 40, 50];
// 3.2.
const numberGreaterThan25 = numbers2.find((num) => num > 25);
console.log(numberGreaterThan25); // 30

// 3.3.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

// 3.4.
const personNamedCharlie = people.find((person) => person.name === "Charlie");
console.log(personNamedCharlie); // { name: "Charlie", age: 35 }

// 4. Filter Method
// 4.1.
const numbers3 = [5, 10, 15, 20, 25, 30];
// 4.2.
const numbersGreaterThan15 = numbers3.filter((num) => num > 15);
console.log(numbersGreaterThan15); // [20, 25, 30]

//4.3.
const people2 = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

// 4.4.
const studentsWithGradeAbove90 = people2.filter(
  (student) => student.grade > 80
);
