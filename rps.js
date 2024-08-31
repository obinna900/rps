let choices = ["rock", "paper", "scissors"];
let winners = [];
let playerWins = 0;
let computerWins = 0;
let scoreElement = document.getElementById("score");


function playerChoice() {
  let Rock = document.getElementById("Rock");
  Rock.addEventListener('click', function() {
    return ('rock');
  }); 

  let Paper = document.getElementById("Paper");
  Paper.addEventListener('click', function() {
    return ('paper');
  }); 

  let Scissors = document.getElementById("Scissors");
  Scissors.addEventListener('click', function() {
    return ('scissors');
  });   
}

function playRound(round) {
    let Play = document.getElementById('Play');
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice();
    let winner = checkWinner(playerSelection, computerSelection);
    console.log(playRound);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}
 playRound();
 
function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]   
}
  


function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper") 
  ) {
    return "Player";
  } else if (
    (choiceC === "rock" && choiceP == "scissors") ||
    (choiceC === "paper" && choiceP == "rock") ||
    (choiceC === "scissors" && choiceP == "paper") 
  ) {
    return "Computer";
  } else {
    return "Tie";
  }
}

function logWinner() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player:", playerWins);
  console.log("Computer:", computerWins);
  console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);
  console.log(winner, "Won the round");
  console.log("-----------------------------");
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  displayScore();
}

function displayScore() {
  scoreElement.innerHTML = `Score: You ${ playerWins }, Computer ${ computerWins }`;
}