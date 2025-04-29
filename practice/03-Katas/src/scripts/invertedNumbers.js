// make an array of numbers
// check if the number is positive or negative
// return the switchet array of numbers
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
const invertedNumbersForEach = [];
// foreach loop to iterate over the array
const invertedNumbers = numbers.map((number) => -number);
numbers.forEach((number) => invertedNumbersForEach.push(-number));

console.log(numbers); // print the original array
console.log(invertedNumbers); // print the inverted array

invertedNumbers.forEach((number) => {
  const li = document.createElement("li"); // create a new li element
  li.textContent = number; // set the text content of the li element to the number
  document.body.appendChild(li); // append the li element to the body of the document
});
