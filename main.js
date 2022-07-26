const main = document.querySelector("#main");
const playerBtns = document.querySelectorAll(".selection-btn");
const playerBtnArr = [...playerBtns];
const roundResponse = document.querySelector("#round-response");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundTracker = document.querySelector("#round-tracker");
const resReaction = document.querySelector("#comres-reaction");
const resText = document.querySelector("#comres-text");

function capitalizeStr(string) {
    const firstCaps = string[0].toUpperCase();
    const restLower = string.slice(1).toLowerCase();
    return firstCaps + restLower;
}

function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerStr = capitalizeStr(playerSelection);

    const winResult = `+1 for Player, ${playerStr} beats ${computerSelection}`;
    const loseResult = `+1 for Challenger, ${computerSelection} beats ${playerStr}`;
    const tieResult = `You and Challenger both chose ${playerStr}`;

    if (playerStr === "Rock") {
        if (computerSelection === "Scissors") {
            roundResponse.textContent = winResult;
            return "player"
        }
        else if (computerSelection === "Paper") {
            roundResponse.textContent = loseResult;
            return "computer"
        } else {
            roundResponse.textContent = tieResult;
            return "tie"
        }
    } else if (playerStr === "Paper") {
        if (computerSelection === "Rock") {
            roundResponse.textContent = winResult;
            return "player"
        } else if (computerSelection === "Scissors") {
            roundResponse.textContent = loseResult;
            return "computer"
        } else {
            roundResponse.textContent = tieResult;
            return "tie"
        }
    } else if (playerStr === "Scissors") {
        if (computerSelection === "Paper") {
            roundResponse.textContent = winResult;
            return "player"
        } else if (computerSelection === "Rock") {
            roundResponse.textContent = loseResult;
            return "computer"
        } else {
            roundResponse.textContent = tieResult;
            return "tie"
        }
    }
} 

function updateScore(roundResult, playerNum, computerNum) {
    if (roundResult === "tie") {
        return {
            player: playerNum,
            computer: computerNum
        }
    } else if (roundResult === "player") {
        playerNum++
        playerScore.textContent = playerNum;
    } else if (roundResult === "computer") {
        computerNum++
        computerScore.textContent = computerNum;
    }
    
    return {
        player: playerNum,
        computer: computerNum
    }
}

function updateRound() {
    let roundNum = parseInt(roundTracker.textContent);
    roundTracker.textContent = ++roundNum;
}

function restartGame() {
    const resultSect = document.querySelector("#result-section");
    const selectionSect = document.querySelector("#selection-section");
    main.removeChild(resultSect);
    selectionSect.style.display = "flex";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    roundTracker.textContent = "1";
    roundResponse.textContent = "Jack refused to give up! Choose your weapon"; 
}

function endGame() {
    const selectionSect = document.querySelector("#selection-section");
    selectionSect.style.display = "none";

    const resultSect = document.createElement("section");
    const restartBtn = document.createElement("button");
    resultSect.setAttribute("id", "result-section");
    restartBtn.setAttribute("id", "restart-btn");
    restartBtn.textContent = "Play Again";
    restartBtn.addEventListener("click", restartGame);
    resultSect.appendChild(restartBtn);
    main.insertBefore(resultSect, selectionSect);
}

function showResult(playerNum, computerNum) {
    const resultSect = document.querySelector("#result-section");
    
    const resultCon = document.createElement("div");
    const resultImg = document.createElement("img");
    const resultPara = document.createElement("p");
    resultCon.setAttribute("id", "result-con");
    resultImg.setAttribute("id", "result-img");
    resultPara.setAttribute("id", "result-para");

    if (playerNum > computerNum) {
        resultImg.setAttribute("src", "images/armstrong-win.png")
        resultPara.textContent = "Status: Armstrong Defeated! Your not sussy anymore!"
    } else {
        resultImg.setAttribute("src", "images/armstrong-lose.png")
        resultPara.textContent = "Status: You are defeated! Can't resist the sussiness"
    }

    resultCon.appendChild(resultImg);
    resultCon.appendChild(resultPara);
    resultSect.prepend(resultCon);
}

function checkGame(playerNum, computerNum) {
    if (!(playerNum >= 5 || computerNum >= 5)) {
        return false
    } else {
        endGame();
        showResult(playerNum, computerNum);
    }
}

for (const playerBtn of playerBtnArr){
    playerBtn.addEventListener("click", () => {
        const playerNum = parseInt(playerScore.textContent);
        const computerNum = parseInt(computerScore.textContent);
        const playerSelection = playerBtn.getAttribute("data-selection");
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        const roundScore = updateScore(roundResult, playerNum, computerNum);
        const gameEnd = checkGame(roundScore.player, roundScore.computer);
        updateRound();
    })
}
