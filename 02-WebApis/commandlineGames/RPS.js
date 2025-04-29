const choice = ["rock", "paper", "scissors"];

function playRound(playerSelection) {
  choice.includes(playerSelection) ||
    (console.log("Invalid input"), process.exit(1));

  const computerSlection = choice[Math.floor(Math.random() * choice.length)];
  console.log(`Computer Selection is : ${computerSlection}`);
  console.log(`Your Choice is : ${playerSelection}`);

  if (playerSelection === computerSlection) {
    return "It's a draw! :-|";
  } else if (
    (computerSlection === "rock" && playerSelection === "paper") ||
    (computerSlection === "paper" && playerSelection === "scissors") ||
    (computerSlection === "scissors" && playerSelection === "rock")
  ) {
    return "You Win! :-)";
  } else {
    return "You Lose! :-(";
  }
}

const args = process.argv.slice(2);
const userInput = args[0]?.toLowerCase();
userInput
  ? console.log(playRound(userInput))
  : console.log("please provide your choice ");
