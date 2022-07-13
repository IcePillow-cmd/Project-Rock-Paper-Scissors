const playerBtns = document.querySelectorAll(".selection-btn");
const playerBtnArr = [...playerBtns];
const resultsCon = document.querySelector("#results-con");
const resultPara = document.querySelector("#result-para");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundTracker = document.querySelector("#round-tracker");

for (const playerBtn of playerBtnArr){
    playerBtn.addEventListener("click", () => {
        let playerNum = parseInt(playerScore.textContent);
        let computerNum = parseInt(computerScore.textContent);
        const gameEnd = checkGame(playerNum, computerNum);
        if (gameEnd) {
            return
        }
        const playerSelection = playerBtn.getAttribute("data-selection");
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        changeScore(roundResult, playerNum, computerNum);
    })
}

function changeScore(roundResult, playerNum, computerNum) {
    if (roundResult === "tie") {
        return
    } else if (roundResult === "player") {
        playerNum++
        playerScore.textContent = playerNum;
    } else if (roundResult === "computer") {
        computerNum++
        computerScore.textContent = computerNum;
    }
}

function checkGame(playerNum, computerNum) {
    if (playerNum >= 5) {
        alert("You win");
        return true
    } else if (computerNum >= 5) {
        alert("You lose");
        return true
    }
    return false
}

function updateRound() {
    let roundNum = parseInt(roundTracker.textContent);
    roundTracker.textContent = ++roundNum;
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
            resultPara.textContent = winResult;
            return "player"
        }
        else if (computerSelection === "Paper") {
            resultPara.textContent = loseResult;
            return "computer"
        } else {
            resultPara.textContent = tieResult;
            return "tie"
        }
    } else if (PAPER.test(playerSelection)) {
        if (computerSelection === "Rock") {
            resultPara.textContent = winResult;
            return "player"
        } else if (computerSelection === "Scissors") {
            resultPara.textContent = loseResult;
            return "computer"
        } else {
            resultPara.textContent = tieResult;
            return "tie"
        }
    } else if (SCISSORS.test(playerSelection)) {
        if (computerSelection === "Paper") {
            resultPara.textContent = winResult;
            return "player"
        } else if (computerSelection === "Rock") {
            resultPara.textContent = loseResult;
            return "computer"
        } else {
            resultPara.textContent = tieResult;
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

