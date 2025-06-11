function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) return "rock";
  else if (randomNumber == 2) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Enter rock,paper or scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(getComputerChoice, getHumanChoice) {
  const computerSelection = getComputerChoice().toUpperCase();
  const humanSelection = getHumanChoice().toUpperCase();

  if (computerSelection == "ROCK" && humanSelection == "PAPER") {
    console.log(
      "Result -> You win:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "ROCK" && humanSelection == "SCISSORS") {
    console.log(
      "Result -> You lose:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "PAPER" && humanSelection == "SCISSORS") {
    console.log(
      "Result -> You win:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "PAPER" && humanSelection == "ROCK") {
    console.log(
      "Result -> You lose:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "SCISSORS" && humanSelection == "PAPER") {
    console.log(
      "Result -> You lose:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "SCISSORS" && humanSelection == "ROCK") {
    console.log(
      "Result -> You lose:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "ROCK" && humanSelection == "ROCK") {
    console.log(
      "Result -> Draw:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "SCISSORS" && humanSelection == "SCISSORS") {
    console.log(
      "Result -> Draw:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  } else if (computerSelection == "PAPER" && humanSelection == "PAPER") {
    console.log(
      "Result -> Draw:" +
        "Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  }
}

playRound(getComputerChoice, getHumanChoice);
