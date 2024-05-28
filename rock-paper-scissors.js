let humanScore = 0;
let computerScore = 0;

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

function pickWinner(choice1, choice2){
    //picks and returns a winners between the two choices
    if(choice1 === choice2) return "no winner";
    switch(choice1) {
        case "rock" : return (choice2 === "scissors") ? choice1 : choice2;
        case "paper" : return (choice2 === "rock") ? choice1 : choice2;
        case "scissors" : return (choice2 === "paper") ? choice1 : choice2;
    }
}

function playRound(humanChoice, computerChoice) {
    //kkeps track of winner whether it's computer or human or a tie between both
    let winner = pickWinner(humanChoice, computerChoice);
    if(winner === "no winner") {
        console.log("It's a tie!");
    }
    else if (winner === humanChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

