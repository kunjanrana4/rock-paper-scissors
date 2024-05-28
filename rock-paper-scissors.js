function getChoice(number){
    //return rock, paper or scissors based on number provided
    return (number === 0) ? "rock" : (number === 1) ? "paper" : "scissors";
}

function getRandomInt(max) {
    //return random number between 0, 1 and 2
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    //randomly return "rock", "paper" or "scissors"
    let randomNumber = getRandomInt(3);
    let computerChoice = getChoice(randomNumber);
    return computerChoice;
} 

function getHumanChoice() {
    //ask user for a choice and return it
    let humanChoice = getChoice(parseInt(prompt("Please enter a number between 0 to 2 to enter your choice.\n 0: rock\n1: paper\n2: scissors")));
    console.log(humanChoice);
    return humanChoice;
}