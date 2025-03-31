let age = 25;
const birthYear = 1998;
let name = "John Doe";
const isStudent = true;

// Reasinging values
age = 26; // This is allowed because age is declared with let
name = "Jane Doe"; // This is also allowed because name is declared with let
// birthYear = 1999; // This will cause an error because birthYear is declared with const
// isStudent = false; // This will also cause an error because isStudent is declared with const

// Logging information
console.log("Age:", age);
console.log("Birth year", birthYear);
console.log("Name:", name);
console.log("isStudent:", isStudent);

// Favorite color

let favoriteColor = "blue";
console.log("Favorite color:", favoriteColor);
favoriteColor = "green"; // Reassigning the value of favoriteColor
console.log("Updated favorite color:", favoriteColor);
