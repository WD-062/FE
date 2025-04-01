// let numbers = [1, 2, 3, 4, 5];

// numbers = 3;

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// console.log(person);
// console.log(person.name);
// console.log(person.age);

const mixedArray = [
  1,
  "apple",
  true,
  null,
  undefined,
  [1, 2, 3],
  {
    name: "John Doe",
    age: 30,
    city: "New York",
  },
];

// console.log(mixedArray);
// console.log(mixedArray[5]);
// console.log(mixedArray[5][0]);

// console.log(mixedArray[6]);
// console.log(mixedArray[6].name);
// console.log(mixedArray[6].age);

// Array methods
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(fruits);

// push vs pop
fruits.push("mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift vs shift
fruits.unshift("strawberry");
console.log(fruits);

fruits.shift();
console.log(fruits);

// splice vs slice
fruits.splice(2, 1); // remove 1 element at index 2
console.log(fruits);

const sliceArray = fruits.slice(1, 3); // get elements from index 1 to 3 (not inclusive)
console.log(fruits);
console.log(sliceArray);

// reverse vs toReversed
fruits.reverse(); // reverse the array in place
console.log(fruits);

const toReversedFruits = fruits.toReversed(); // create a new reversed array
console.log(fruits);
console.log(toReversedFruits);
