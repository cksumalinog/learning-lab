/*
const product = {
  name: "socks",
  price: 1090,
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = "Cotton socks";
console.log(product.name);

product.date = "01-09-25";
console.log(product);

delete product.date;
console.log(product);
*/

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
/*
if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
*/
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "Scissor") {
    if (computerMove === "Rock") {
      result = "You Lose.";
    } else if (computerMove === "Paper") {
      result = "You Win!";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win!";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You Lose.";
    } else if (computerMove === "Scissors") {
      result = "You Win!";
    }
  } else if (playerMove === "Reset") {
    score.losses = 0;
    score.ties = 0;
    score.wins = 0;
    localStorage.removeItem("score");
  }

  if (result === "You Win!") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  alert(
    `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  );
}

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";
  if (0 <= randomNum && randomNum < 1 / 3) {
    computerMove = "Rock";
  } else if (1 / 3 < randomNum && randomNum < 2 / 3) {
    computerMove = "Paper";
  } else if (2 / 3 < randomNum && randomNum < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}
