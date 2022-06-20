
function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    const rock = /^rock$/i; 
    const paper = /^paper$/i;
    const scissors = /^scissors/i;
    const WIN = `You win! ${playerSelection} beats ${computerSelection}\n\n`;
    const LOSE = `You lose! ${computerSelection} beats ${playerSelection}\n\n`;
    const TIE = `You and Computer both chose ${playerSelection}, It's a Tie\n\n`;

    if (rock.test(playerSelection)) {
        if (computerSelection === "Scissors") {
            console.log(WIN);
            return "+1 for player"
        }
        else if (computerSelection === "Paper") {
            console.log(LOSE);
            return "+1 for computer"
        } else {
            console.log(TIE);
            return "Tie"
        }
    } else if (paper.test(playerSelection)) {
        if (computerSelection === "Rock") {
            console.log(WIN);
            return "+1 for player"
        } else if (computerSelection === "Scissors") {
            console.log(LOSE);
            return "+1 for computer"
        } else {
            console.log(TIE);
            return "Tie"
        }
    } else if (scissors.test(playerSelection)) {
        if (computerSelection === "Paper") {
            console.log(WIN);
            return "+1 for player"
        } else if (computerSelection === "Rock") {
            console.log(LOSE);
            return "+1 for computer"
        } else {
            console.log(TIE);
            return "Tie"
        }
    } else {
        console.log(`${playerSelection} is not a valid input`);
        return `${playerSelection} is not a valid input`;
    }
} 

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper or Scissors?");
        let computerInput = computerPlay();
        console.log(`Round ${i}:\n`)
        let round = playRound(userInput, computerInput);
        alert(round);

        if (round.includes("player")) {
            ++playerScore;
        } else if (round.includes("computer")) {
            ++computerScore;
        } 
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won!");
        console.table({
            Player: playerScore,
            Computer: computerScore
        });
    } else if (playerScore < computerScore) {
        console.log("You lost! Try Again");
        console.table({
            Player: playerScore,
            Computer: computerScore
        });
    } else {
        console.log("It's a tie");
    }
}
game();


// --> To check the function return value you should omit the same argument
// let player = "rock";
// let computer = computerPlay();
// console.log(player);
// console.log(computer);
// console.log(playRound(player, computer))

// if (playRound(player, computer) == "No one wins, No one loses") {
//     alert("yes");
// }


// --> You can store function with arguments in a variable
// function add(num1, num2) {
//     return num1 + num2;
// }

// let test = add(1,2);
// console.log(test);