function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";
  if (0 <= randomNum && randomNum < 1 / 3) {
    computerMove = "rock";
  }
  if (1 / 3 < randomNum && randomNum < 2 / 3) {
    computerMove = "paper";
  }
  if (2 / 3 < randomNum && randomNum < 1) {
    computerMove = "scissor";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "scissor") {
      result = "You win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win!";
    }
    if (computerMove === "paper") {
      result = "Tie.";
    }
    if (computerMove === "scissor") {
      result = "You Lose";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You Lose.";
    }
    if (computerMove === "paper") {
      result = "You Win!";
    }
    if (computerMove === "scissor") {
      result = "Tie.";
    }
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
