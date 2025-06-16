function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) return "rock";
  else if (randomNumber == 2) return "paper";
  else return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(getComputerChoice, getHumanChoice) {
  const computerSelection = getComputerChoice().toUpperCase();
  const humanSelection = getHumanChoice;

  function displayResult(result) {
    const resultBox = document.createElement("div");
    resultBox.classList.add("round-result")
    resultBox.textContent =
      "Result -> You " +
      result +
      ": Computer choice:" +
      computerSelection +
      ", Human Choice:" +
      humanSelection +
      "<<>>Scores You:"+
      humanScore +
      " PC:"+
      computerScore
      ;

    document.body.appendChild(resultBox)
  }

  if (computerSelection == "ROCK" && humanSelection == "PAPER") {
    humanScore++;
    displayResult("win");
  } else if (computerSelection == "ROCK" && humanSelection == "SCISSORS") {
    computerScore++;
    displayResult("lose");
  } else if (computerSelection == "PAPER" && humanSelection == "SCISSORS") {
    humanScore++;
    displayResult("win");
  } else if (computerSelection == "PAPER" && humanSelection == "ROCK") {
    computerScore++;
    displayResult("lose");
  } else if (computerSelection == "SCISSORS" && humanSelection == "PAPER") {
    computerScore++;
    displayResult("lose");
  } else if (computerSelection == "SCISSORS" && humanSelection == "ROCK") {
    humanScore++;
    displayResult("win");
  } else if (computerSelection == "ROCK" && humanSelection == "ROCK") {
    displayResult("guys are draw");
  } else if (computerSelection == "SCISSORS" && humanSelection == "SCISSORS") {
    displayResult("guys are draw");
  } else if (computerSelection == "PAPER" && humanSelection == "PAPER") {
    displayResult("guys are draw");
  }

  if(humanScore === 5 || computerScore === 5){
    
    const roundResults = Array.from(document.querySelectorAll(".round-result"))
    const buttonList = Array.from(document.querySelectorAll("button"))

    for(const roundResult of roundResults){
      roundResult.remove()
    }

    for(const button of buttonList){
      button.remove()
    }

    const finalResultBox = document.createElement('div')
    finalResultBox.classList.add = "final-result-box"
    finalResultBox.textContent = `The Winner is ${humanScore===5?'You':'Computer'}`
    document.body.appendChild(finalResultBox)
  }
}

function playGame() {
  const box = document.createElement("div");
  box.classList.add("button-box")

  const rock = document.createElement("button");
  rock.textContent = "ROCK";

  const paper = document.createElement("button");
  paper.textContent = "PAPER";

  const scissors = document.createElement("button");
  scissors.textContent = "SCISSORS";

  box.appendChild(rock);
  box.appendChild(paper);
  box.appendChild(scissors);

  document.body.appendChild(box);

  
  box.addEventListener("click", (e) => {
    playRound(getComputerChoice, e.target.textContent);
    console.log(e.target.textContent,humanScore,computerScore);
    
    
  });
}

playGame();
