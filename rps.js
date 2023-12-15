const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}
game();

  

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(playerSelection,computerSelection);
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
    console.log(input);
}