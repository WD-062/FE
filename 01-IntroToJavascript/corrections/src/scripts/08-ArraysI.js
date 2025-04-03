// 1. Initialisation
// Initializing an array
const myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];

// log the array to the console
// console.log([42, "Hello, world!", true, 3.14,  "JavaScript"]);
console.log(myArray);

//for loop to iterate over the array
for (let i = 0; i < myArray.length; i++) {
  // log each element to the console
  //   console.log(myArray[i]);
}

//forEach loop to iterate over the array
// myArray.forEach((item) => console.log(item));

// map loop to iterate over the array
// myArray.map((item) => console.log(item));

console.log(myArray[1]);
myArray[1] = "Changed value";
console.log(myArray[1]); // "Changed value"

// 2. Push, pop, shift and unshift

const myArray2 = [1, 2, 3, 4, 5];
console.log("before the push", myArray2); // [1, 2, 3, 4, 5]
// push
myArray2.push(6, 7);
console.log("after the push", myArray2); // [1, 2, 3, 4, 5, 6, 7]

// pop
myArray2.pop();
console.log("after the pop", myArray2); // [1, 2, 3, 4, 5, 6]

//shift
myArray2.shift();
console.log("after the shift", myArray2); // [2, 3, 4, 5, 6]

//unshift
myArray2.unshift(0, -1);
console.log("after the unshift", myArray2); // [0, -1, 2, 3, 4, 5, 6]


// 3. Reverse and toReversed
// Array 1: Use reverse() method
const array3 = [1, 2, 3, 4, 5];
// Reverse array3 in place and print the result
array3.reverse();
console.log(array3); // [5, 4, 3, 2, 1]

// Array 4: Use toReversed() method
const array4= ['a', 'b', 'c', 'd', 'e'];
const toReversedArray = array4.toReversed();
console.log(toReversedArray); // ['e', 'd', 'c', 'b', 'a']
console.log(array4); // ['a', 'b', 'c', 'd', 'e']

// 4. Splicing
// You can work here or download the template!
// Array 1: Use splice() method
const array5 = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result
array5.splice(2, 1, 35, 36);
console.log(array5); 

// Array 2: Use toSpliced() method
const array6 = ['x', 'y', 'z'];
// Create a modified copy of array2 and print both arrays
const toSplicedArray = array6.toSpliced(1, 1, 'b', 'c');
console.log(toSplicedArray); // ['x', 'b', 'c', 'z']
console.log(array6); // ['x', 'y', 'z']

// 5. Slice
// Array 1: Use slice() method
const array7 = [2, 4, 6, 8, 10, 12, 14, 16];
// Extract different portions of the array and print the results
const slicedArray1 = array7.slice(2, 3);
console.log(slicedArray1); // [6, 8, 10, 12, 14, 16]
console.log(array7); // [2, 4, 6, 8, 10, 12, 14, 16]

// 6. Join
// Array 1: Use join() method
const array8 = ['apple', 'banana', 'cherry', 'date'];

const coma = array8.join();
console.log(coma); // 'apple,banana,cherry,date'
const coma1 = array8.join(', ');
console.log(coma1); // 'apple, banana, cherry, date'


// 7. For loop
const numberArray = [10, 20, 30, 40, 50];
// Using a for loop to iterate over the array and print each element
for(let i = 0; i < numberArray.length; i++){
    console.log(numberArray[i]); // 10, 20, 30, 40, 50
}

for(const item of numberArray) {
    console.log(item); // 10, 20, 30, 40, 50
}

