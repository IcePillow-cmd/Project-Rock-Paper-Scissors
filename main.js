
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
            console.log( `You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (computerSelection === "Paper") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log( "No one wins, No one loses");
        }
    } else if (paper.test(playerSelection)) {
        if (computerSelection === "Rock") {
            console.log( `You win! ${playerSelection} beats ${computerSelection}`);
        } else if (computerSelection === "Scissors") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log( "No one wins, No one loses");
        }
    } else if (scissors.test(playerSelection)) {
        if (computerSelection === "Paper") {
            console.log( `You win! ${playerSelection} beats ${computerSelection}`);
        } else if (computerSelection === "Rock") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log( "No one wins, No one loses");
        }
    } else {
        return `${playerSelection} is not a valid input`
    }
} 

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper or Scissors?");
        let computerInput = computerPlay();
        alert(playRound(userInput, computerInput));
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