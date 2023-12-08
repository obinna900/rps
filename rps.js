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
    return "Rock"
}
