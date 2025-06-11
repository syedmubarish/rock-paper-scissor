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

  function displayResult(result) {
    console.log(
      "Result -> You " +
        result +
        ": Computer choice:" +
        computerSelection +
        ", Human Choice:" +
        humanSelection
    );
  }

  if (computerSelection == "ROCK" && humanSelection == "PAPER") {
    displayResult("win");
    humanScore++;
  } else if (computerSelection == "ROCK" && humanSelection == "SCISSORS") {
    displayResult("lose");
    computerScore++;
  } else if (computerSelection == "PAPER" && humanSelection == "SCISSORS") {
    displayResult("win");
    humanScore++;
  } else if (computerSelection == "PAPER" && humanSelection == "ROCK") {
    displayResult("lose");
    computerScore++;
  } else if (computerSelection == "SCISSORS" && humanSelection == "PAPER") {
    displayResult("lose");
    computerScore++;
  } else if (computerSelection == "SCISSORS" && humanSelection == "ROCK") {
    displayResult("win");
    humanScore++;
  } else if (computerSelection == "ROCK" && humanSelection == "ROCK") {
    displayResult("guys are draw");
  } else if (computerSelection == "SCISSORS" && humanSelection == "SCISSORS") {
    displayResult("guys are draw");
  } else if (computerSelection == "PAPER" && humanSelection == "PAPER") {
    displayResult("guys are draw");
  }
}

function playGame() {
  let round = 0;
  while (round != 5) {
    playRound(getComputerChoice, getHumanChoice);
    round++;
  }
  if (computerScore > humanScore) console.log("The winner is: Computer!!");
  else if (computerScore < humanScore) console.log("The winner is: You!!");
  else {
    console.log("Game ends in draw");
  }
  console.log(
    "The Scores -> Computer score: " +
      computerScore +
      ", Your score: " +
      humanScore
  );
}

playGame();
