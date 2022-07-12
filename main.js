const playerBtns = document.querySelectorAll(".selection-btn");
const playerBtnArr = [...playerBtns];
const resultsCon = document.querySelector("#results-con");
const resultPara = document.querySelector("#result-para");

for (const playerBtn of playerBtnArr){
    playerBtn.addEventListener("click", () => {
        const playerSelection = playerBtn.getAttribute("data-selection");
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
    })
}

function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {

    const ROCK = /^rock$/i; 
    const PAPER = /^paper$/i;
    const SCISSORS = /^scissors?/i;

    const winResult = `You win! ${playerSelection} beats ${computerSelection}\n\n`;
    const loseResult = `You lose! ${computerSelection} beats ${playerSelection}\n\n`;
    const tieResult = `You and Computer both chose ${playerSelection}, It's a Tie\n\n`;

    if (ROCK.test(playerSelection)) {
        if (computerSelection === "Scissors") {
            console.log(WIN);
            return "player"
        }
        else if (computerSelection === "Paper") {
            console.log(LOSE);
            return "computer"
        } else {
            console.log(TIE);
            return "tie"
        }
    } else if (PAPER.test(playerSelection)) {
        if (computerSelection === "Rock") {
            console.log(WIN);
            return "player"
        } else if (computerSelection === "Scissors") {
            console.log(LOSE);
            return "computer"
        } else {
            console.log(TIE);
            return "tie"
        }
    } else if (SCISSORS.test(playerSelection)) {
        if (computerSelection === "Paper") {
            console.log(WIN);
            return "player"
        } else if (computerSelection === "Rock") {
            console.log(LOSE);
            return "computer"
        } else {
            console.log(TIE);
            return "tie"
        }
    }
} 

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let userInput = prompt("Rock, Paper or Scissors?");
    let computerInput = computerPlay();
    let round = playRound(userInput, computerInput);
    alert(round);

    if (round.includes("player")) {
        ++playerScore;
    } else if (round.includes("computer")) {
        ++computerScore;
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

