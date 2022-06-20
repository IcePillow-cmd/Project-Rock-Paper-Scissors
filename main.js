
function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    const rock = /^rock$/i; 
    const paper = /^paper$/i;
    const scissors = /^scissors/i;

    if (rock.test(playerSelection)) {
        if (computerSelection === "Scissors") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection === "Paper") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return "No one wins, No one loses"
        }
    } else if (paper.test(playerSelection)) {
        if (computerSelection === "Rock") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection === "Scissors") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return "No one wins, No one loses"
        }
    } else if (scissors.test(playerSelection)) {
        if (computerSelection === "Paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection === "Rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            return "No one wins, No one loses"
        }
    } else {
        return `${playerSelection} is not a valid input`
    }
} 
