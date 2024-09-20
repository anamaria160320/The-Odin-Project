console.log("hey");

function getHumanChoice() {
  let choice = prompt("Choose between: Rock , Papper and Scissors");
  choice = choice.toUpperCase();
  return choice;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    choice = "ROCK";
  } else if (choice == 1) {
    choice = "PAPPER";
  } else {
    choice = "SCISSORS";
  }

  return choice;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "ROCK") {
    if (computerChoice == "SCISSORS") humanScore++;
    else if (computerChoice == "PAPPER") computerScore++;
  }

  if (humanChoice == "PAPPER") {
    if (computerChoice == "ROCK") humanScore++;
    if (computerChoice == "SCISSORS") computerScore++;
  }

  if (humanChoice == "SCISSORS") {
    if (computerChoice == "ROCK") computerScore++;
    if (computerChoice == "PAPPER") humanScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    alert(`Human select : ${humanChoice}. Computer select : ${computerChoice}`);
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    alert(`Human win! The score is ${humanScore} - ${computerScore}`);
  }

  if (humanScore < computerScore) {
    alert(`Computer win! The score is ${computerScore} - ${humanScore}`);
  } else if (humanScore == computerScore) {
    alert(`It's a tie! The score is ${computerScore} - ${humanScore} `);
  }
}
