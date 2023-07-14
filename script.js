const possibleCombinations = ["rock", "paper", "scissors"];
function getComputerChoice(arr) {
  return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Rock beats Scissors! You win!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Paper beats Rock! You win!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Scissors beats Paper! You win!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Rock beats Scissors! You lose!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Paper beats Rock! You lose!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Paper beats Rock! You lose!";
  } else if (playerSelection === computerSelection) {
    return "Its a tie!";
  } else {
    return "Please pick a valid choice.";
  }
}

const showComputerSelection = document.querySelector(
  ".show-computer-selection"
);
const showPlayerSelection = document.querySelector(".show-player-selection");
const showResult = document.querySelector(".result");

const showPlayerScore = document.querySelector(".player-score");
const showComputerScore = document.querySelector(".computer-score");

const gameResult = document.querySelector(".game-result");

function calculateScore(string) {
  if (string.endsWith("You win!")) {
    playerScore++;
    showPlayerScore.textContent = playerScore;
    if (playerScore === 2) {
      declareGameWinnerPlayer();
    }
    return;
  } else if (string.endsWith("You lose!")) {
    computerScore++;
    showComputerScore.textContent = computerScore;
    if (computerScore === 2) {
      declareGameWinnerComputer();
    }
    return;
  } else {
    return;
  }
}

const playAgain = document.querySelector(".play-again");

function declareGameWinnerPlayer() {
  playAgain.classList.add("active");
  showResult.textContent = "You won the game!";
}

function declareGameWinnerComputer() {
  playAgain.classList.add("active");
  showResult.textContent = "You lost the game!";
}

function winner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `Score is ${playerScore} for you and ${computerScore} for the computer. You won the Game!`;
  } else if (playerScore < computerScore) {
    return `Score is ${playerScore} for you and ${computerScore} for the computer. You lost the Game!`;
  }
}

let playerScore = 0;
let computerScore = 0;
let declareRoundWinner = "";

const buttons = document.querySelectorAll(".user-input");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice(possibleCombinations);
    showComputerSelection.textContent = computerSelection.toUpperCase();
    showPlayerSelection.textContent = playerSelection.toUpperCase();
    declareRoundWinner = playRound(playerSelection, computerSelection);
    showResult.textContent = declareRoundWinner;
    calculateScore(declareRoundWinner);
  });
});
