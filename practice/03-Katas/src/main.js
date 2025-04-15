// create the function
// the function needs to have a parameter for the days
// the function can have a parameter for the cost per day
// the function can have a parameter for the discounts
function totalCarCost(days, costPerDay) {
  let totalCost = costPerDay * days;
  // conditional statement to check 7 days or more
  if (days >= 7) {
    totalCost = totalCost - 50;
    // conditional statement to check 3 days or more
  } else if (days >= 3) {
    totalCost = totalCost - 20;
    // conditional statement to check less than 3 days
  } else if (days >= 0) {
    totalCost;
    // else statement the rest
  } else {
    return "Invalid number of days";
  }
  console.log(`Total cost is $${totalCost}`);
  return `Total cost is $${totalCost}`;
}

const p = document.querySelector("p");
p.textContent = totalCarCost(7, 40);
// document.body.appendChild(p);

// call the function and log the result
totalCarCost(7, 40);
totalCarCost(3, 40);
totalCarCost(1, 40);
totalCarCost(-3, 40);
