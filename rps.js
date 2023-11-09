function getComputerChoice() {
    let computerChoice = (Math.random()* 2);
    if (computerChoice <= 0.34) {
        computerChoice = "Rock"; 
    } else if (computerChoice <= 0.67) {
        computerChoice = "Paper"; 
    } else {
        computerChoice = "Scissors";
    }

    console.log(computerChoice);
}
computerChoice = getComputerChoice();