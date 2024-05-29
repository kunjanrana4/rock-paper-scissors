let humanScore = 0;
let computerScore = 0;

function getChoice(number){
    //return rock, paper or scissors based on number provided
    return (number === 0) ? "Rock" : (number === 1) ? "Paper" : "Scissors";
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
    let humanChoice;
    while((humanChoice = parseInt(prompt("Please enter a number between 0 to 2 to enter your choice.\n0: rock\n1: paper\n2: scissors")))!=null){
        if(humanChoice >= 0 && humanChoice <= 2) {
            return getChoice(humanChoice);
        }
        else {
            alert("The input must be a number between 0 and 2.");
        }
    }
}

function pickWinner(choice1, choice2){
    //picks and returns a winners between the two choices
    if(choice1 === choice2) return "no winner";
    switch(choice1) {
        case "Rock" : return (choice2 === "Scissors") ? choice1 : choice2;
        case "Paper" : return (choice2 === "Rock") ? choice1 : choice2;
        case "Scissors" : return (choice2 === "Paper") ? choice1 : choice2;
    }
}

function playRound(humanChoice, computerChoice) {
    //keeps track of winner whether it's computer or human or a tie between both
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

function declareWinner() {
    //declares who won the game
    let message = `Player Score: ${humanScore}\nComputerScore: ${computerScore}\n`;
    if(humanScore == computerScore) {
        alert(`${message}This game is a tie between you and the computer.`);
        return;
    }
    message += `You ${(humanScore > computerScore)?"won":"lost"} this game by ${Math.abs(humanScore - computerScore)} points.`;
    alert(message);
}

function playGame() {
    //play the entire game
    for(let round = 0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    declareWinner();

    humanScore = 0;
    computerScore = 0;
}

playGame();