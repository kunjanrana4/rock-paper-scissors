function getRandomInt(max) {
    //return random number between 0, 1 and 2
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    //randomly return "rock", "paper" or "scissors"
    let randomNumber = getRandomInt(3);
    let computerChoice = (randomNumber === 0) ? "rock" : (randomNumber === 1) ? "paper" : "scissors";
    return computerChoice;
} 