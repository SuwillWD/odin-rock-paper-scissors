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

function game(playRound, getComputerChoice) {
  //   const rounds = parseInt(prompt("How many rounds would you like to play?"));
  let playerScore = 0;
  let computerScore = 0;
  let declareRoundWinner = "";
  for (let i = 0; i < rounds; i++) {
    const computerSelection = getComputerChoice(possibleCombinations);
    // const playerSelection = prompt(
    //   "Pick between Rock, Paper & Scissor?"
    // ).toLowerCase();
    console.log(`Round ${i + 1}:`);
    console.log("Player Selection:", playerSelection);
    console.log("Computer Selection:", computerSelection);
    declareRoundWinner = playRound(playerSelection, computerSelection);
    console.log(`Result of Round ${i + 1}:` + declareRoundWinner);
    calculateScore(declareRoundWinner);
  }
  function calculateScore(string) {
    if (string.endsWith("You win!")) {
      playerScore++;
      return;
    } else if (string.endsWith("You lose!")) {
      computerScore++;
      return;
    } else {
      return;
    }
  }
  winner(playerScore, computerScore);
}

function winner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(
      `Score is ${playerScore} for you and ${computerScore} for the computer. You won the Game!`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `Score is ${playerScore} for you and ${computerScore} for the computer. You lost the Game!`
    );
  } else {
    console.log(
      `Score is ${playerScore} for you and ${computerScore} for the computer. The Game is a tie!`
    );
  }
}
// game(playRound, getComputerChoice);

const showComputerSelection = document.querySelector(".show-computer-input");

const showResult = document.querySelector(".show-result");

const buttons = document.querySelectorAll(".user-input");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.value.toLowerCase();
    const computerSelection = getComputerChoice(possibleCombinations);
    showComputerSelection.value = computerSelection.toUpperCase();
    showResult.value = playRound(playerSelection, computerSelection);
  });
});
