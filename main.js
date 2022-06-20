
function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    // Regex variables
    const ROCK = /^rock$/i; 
    const PAPER = /^paper$/i;
    const SCISSORS = /^scissors/i;
    //Message variables
    const WIN = `You win! ${playerSelection} beats ${computerSelection}\n\n`;
    const LOSE = `You lose! ${computerSelection} beats ${playerSelection}\n\n`;
    const TIE = `You and Computer both chose ${playerSelection}, It's a Tie\n\n`;

    //Console logs for message and return for point system basis
    if (ROCK.test(playerSelection)) {
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
    } else if (PAPER.test(playerSelection)) {
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
    } else if (SCISSORS.test(playerSelection)) {
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
    // Score variables are outside to prevent re-initialization
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        // getting input from user and ocmputer
        let userInput = prompt("Rock, Paper or Scissors?");
        let computerInput = computerPlay();
        // to show message in console
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
        console.log("%c Congratulations! You won!", "background:gold; color:black; font-size: 20px; padding: 10px; border-style: outset;");
        console.table({
            Player: playerScore,
            Computer: computerScore
        });
    } else if (playerScore < computerScore) {
        console.log("%c You lost! Try Again", "background:red; color:black; font-size: 20px; padding: 10px; border-style: outset;");
        console.table({
            Player: playerScore,
            Computer: computerScore
        });
    } else {
        console.log("%c It's a tie", "background:white; color:black; font-size: 20px; padding: 10px; border-style: outset;");
    }
}
game();
alert("Check the console in case it's still not to see the summary of the game")


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