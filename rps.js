const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
 for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWinner();
}
game();

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}
 
function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)]   
}
  
function playerChoice() {
    let input = prompt("type Rock, Paper, or Scissors");
    while (input == null) { 
      input = prompt("type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
      let check = validateInput(input);
    while (check == false) {
      input = prompt("Spelling needs to be exact, but capitalization doesn't matter");   
    
      while (input == null) {
        input = prompt("type Rock, Paper, or Scissors"); 
      }
      input = input.toLowerCase();
      check = validateInput(input);
  }
    return input;
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