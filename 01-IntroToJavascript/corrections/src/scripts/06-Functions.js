// 1.Declare a function with no parameters that outputs something to the console.
// Declare a function named greet that logs "Hello, World!" to the console.
// Call the function.

// function
// name of the function
// ()
// log the message to the console  "Hello, World!"

function greet() {
//   console.log("Hello, World!");
  return "Hello, World!";
}

// call the function name + ()
console.log(greet());

// 2. Declare a function with one parameter that returns something.
// Declare a function named square that takes a number as a parameter and returns its square.
// Call the function with the argument 5, store the result in a variable, and output it to 
// the console.
// variable
    let result;
// create a function
// give it a name 
// add a parameter
function square (num) { 
   return num*num;
}
// call the function with an argument 
result = square(5);
console.log(result);

// 3. Declare a function with one parameter that performs a control flow with a switch statement 
// and returns accordingly.
// Declare a function named getDayName that takes a number (0-6) as a parameter and returns 
// the name of the day.
// Use a switch statement to determine the day name.
// variable for result

function getDayName (num) {
    // variable for day name
    let dayName;
    // switch to get the day name
    switch(num) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid number!";
    }
}



// Call the function with the argument 3, store the result in a variable, and output it to 
// the console.
