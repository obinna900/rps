function getComputerChoice() {
    let computerChoice = (Math.random()* 2);
    if (computerChoice <= 0.34) {
        computerChoice = 'Rock'; 
    } else if (computerChoice <= 0.67) {
        computerChoice = 'Paper'; 
    } else {
        computerChoice = 'Scissors';
    }

    
}
computerChoice = getComputerChoice();

function getPlayerChoice() {
    let playerChoice = (Math.random()* 2);
    if (playerChoice <= 0.34) {
        playerChoice = 'Rock'; 
    } else if (playerChoice <= 0.67) {
        playerChoice = 'Paper'; 
    } else {
        playerChoice = 'Scissors';
    }    
}
playerChoice = getPlayerChoice();

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound(computerSelection, playerSelection) {
    let computerResponse = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      computerResponse = 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      computerResponse = 'You Win! Rock beats Scissors';
    } else {
      computerResponse = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      computerResponse = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      computerResponse = 'You Win! Paper beats Rock';
    } else {
      computerResponse = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      computerResponse = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      computerResponse = 'You Win! Scissors beats Paper';
    } else {
      computerResponse = "It's a tie";
    }
  }

 console.log(computerResponse);
}
computerResponse = playRound();