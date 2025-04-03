const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// 1. Use a for loop to count the total number of animals.

// counter variable for the animals
let count = 0;

// initialization: let i = 0;
// condition: i < animals.length;
// increment: i++
for (let i = 0; i < animals.length; i++) {
  // increment the count variable in each run
  count++;
}
// log the count variable to the console tthe total number of animals
console.log(count); // 6

// 2. Use a for loop to count animals whose names have five or more letters.
// You can check the length of a string

// variables
let countFiveOrMore = 0;

// for loop to iterate through the animals array

// initialization: let i = 0;
// condition: i < animals.length;
// increment: i++
for (let i = 0; i < animals.length; i++) {
  //condition to check if the animal name has five or more letters
  // if
  // animals[i].length >= 5
  // countFiveOrMore++
  if (animals[i].length >= 5) {
    countFiveOrMore++;
  }
}
// log the countFiveOrMore variable to the console
console.log(countFiveOrMore); // 4

// 3. Use a for loop to count animals until you encounter an animal whose
// name starts with 'm'
// variables 
let countUntilM = 0;
//
for(let i=0;i<animals.length;i++){
  if(animals[i].toLowerCase().startsWith("m")){
    break; // exit the loop if the animal name starts with 'm'
  }
  countUntilM++;
}

console.log(countUntilM); // 5