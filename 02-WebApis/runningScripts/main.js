console.log("Hello from main.js");

const userChoice = process.argv[2].toLowerCase(); // get the user choice from command line arguments
console.log(userChoice); // prints the user choice

if (userChoice === "rock") {
    console.log("You chose rock!");
} else if (userChoice === "paper") {
    console.log("You chose paper!");
} else if (userChoice === "scissors") {
    console.log("You chose scissors!");
} else {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    process.exit(1); // exit the script with an error code
}