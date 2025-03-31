// block of code {}
let temperature = 40;

// if(temperature < 15) {
//     console.log("It's cold outside, wear a jacket!");
// }

// if(temperature < 15) {
//     console.log("It's cold outside, wear a jacket!");
// } else {
//     console.log("It's warm outside, no need for a jacket!");
// }

// if (temperature < 15) {
//   console.log("It's cold outside, wear a jacket!");
// } else if (temperature <= 25) {
//   console.log("It's a nice day, just wear a sweater!");
// } else {
//   console.log("It's warm outside, no need for a jacket!");
// }

// switch
let message;

switch (temperature) {
  case 10:
    message = "It's cold outside, wear a jacket!";
    break;
  case 20:
    message = "It's a nice day, just wear a sweater!";
    break;
  case 30:
    message = "It's warm outside, no need for a jacket!";
    break;
  default:
    message = "Temperature not recognized!";
}

console.log(message);
