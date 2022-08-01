const main = document.querySelector("#main");
const playerBtns = document.querySelectorAll(".selection-btn");
const playerBtnArr = [...playerBtns];
const roundResponse = document.querySelector("#round-response");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundTracker = document.querySelector("#round-tracker");
const resReaction = document.querySelector("#comres-reaction");
const resText = document.querySelector("#comres-text");
const playerStat = document.querySelector("#player-status");
const computerStat = document.querySelector("#computer-status");

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}
// this function updates the roundResponse and returns the argument playRoundSelection
function setReturn(textContent, playRoundResult) {
    roundResponse.textContent = textContent;
    return playRoundResult;
}
function playRound(playerSelection, computerSelection) {
    const winResult = `+1 for Jack, ${playerSelection} beats ${computerSelection}`;
    const loseResult = `+1 for Armstrong, ${computerSelection} beats ${playerSelection}`;
    const tieResult = `Both players chose ${playerSelection}, No points earned!`;
    // the if statement when they player is winning
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return setReturn(winResult, "player");
    }
    // the if statement when both players are tied
    if (playerSelection === computerSelection) {
        return setReturn(tieResult, "tie");
    }
    // the statement when the computer is winning
    return setReturn(loseResult, "computer");
}

function updateComResponse(roundResult, playerSelection, computerSelection) {
    const winResList = [
        "What?",
        "Slippery Little Bastard!",
        `Making the Mother of all ${computerSelection} here, Jack. Can't fret over every ${playerSelection}`,
        "Okay, Now I'm mad.",
        "That's the best you got?",
        "That one hurt!",
        "That aint gonna work",
    ];

    const loseResList = [
        "Played Rochambeau, ya know. Coulda gone pro if I hadn't joined the navy.",
        "Try University of Texas. I'm not one of those beltway pansies.",
        "Don't f*ck with this senator!",
        `Nice ${playerSelection}!`,
        "F*ck the self entitled man of cultures. F*ck the sussy bakas. F*ck all of it!",
        "I'll rid this world of pointless sus, Jack",
        `Nano${computerSelection} Son! It strengthens in response to ${playerSelection} trauma. You can't hurt me Jack`,
    ];

    const tieResList = [
        "I don't have time for this",
        "C'mon, Jack!",
        `${playerSelection}-to-${computerSelection}, I can't be beat. C'mon!`,
        "...",
        "Let's see how long you can keep up",
    ];

    if (roundResult === "player") {
        resReaction.src = "images/armstrong-lose.png";
        resText.textContent = getRandomItem(winResList);
        return;
    }
    if (roundResult === "computer") {
        resReaction.src = "images/armstrong-win.png";
        resText.textContent = getRandomItem(loseResList);
        return;
    }
    resReaction.src = "images/armstrong-base.png";
    resText.textContent = getRandomItem(tieResList);
    return;
}

function showRoundWinner(roundResult) {
    switch (roundResult) {
        case "player": {
            playerStat.style.boxShadow = "0px 10px 20px white";
            computerStat.style.boxShadow = "none";
        }
        case "computer": {
            computerStat.style.boxShadow = "0px 10px 20px white";
            playerStat.style.boxShadow = "none";
        }
        case "tie": {
            playerStat.style.boxShadow = "none";
            computerStat.style.boxShadow = "none";
        }
    }
}

function updateScore(roundResult, playerNum, computerNum) {
    if (roundResult === "tie") {
        return {
            player: playerNum,
            computer: computerNum,
        };
    }
    // if they are not tied, the argument is mutated to update score
    return {
        player:
            // the ternary operator is used to update the score of player
            roundResult === "player"
                ? (() => {
                      playerNum++;
                      playerScore.textContent = playerNum;
                      return playerNum;
                  })()
                : playerNum,
        // the ternary operator is used to update the score of computer
        computer:
            roundResult === "computer"
                ? (() => {
                      computerNum++;
                      computerScore.textContent = computerNum;
                      return computerNum;
                  })()
                : computerNum,
    };
}

function updateRound() {
    let roundNum = parseInt(roundTracker.textContent);
    roundTracker.textContent = roundNum++;
}

function restartGame() {
    const resultSect = document.querySelector("#result-section");
    const selectionSect = document.querySelector("#selection-section");
    const restartResText = [
        "Let's Go!",
        "Come on!",
        "Ready or not Jack, Here we go!",
        "I like you Jack so I'm giving you another shot.",
    ];
    const bgImages = [
        "url(images/bg-mgrWarScene.png)",
        "url(images/bg-mgrArmory.png)",
        "url(images/bg-mgrLab.png)",
    ];
    main.removeChild(resultSect);
    selectionSect.style.display = "flex";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    roundTracker.textContent = "1";
    playerStat.style.boxShadow = "none";
    computerStat.style.boxShadow = "none";
    roundResponse.textContent = "Jack refused to give up! Choose your weapon";
    resText.textContent = getRandomItem(restartResText);
    resReaction.src = "images/armstrong-base.png";
    document.body.style.backgroundImage = getRandomItem(bgImages);
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
        resultImg.setAttribute("src", "images/armstrong-win.png");
        resultPara.textContent =
            "Status: Armstrong Defeated! Your not sussy anymore!";
        return;
    }
    // remove else statement because return statement guards the clause
    resultImg.setAttribute("src", "images/armstrong-lose.png");
    resultPara.textContent =
        "Status: You are defeated! Can't resist the sussiness";

    resultCon.appendChild(resultImg);
    resultCon.appendChild(resultPara);
    resultSect.prepend(resultCon);
}

function checkGame(playerNum, computerNum) {
    if (!(playerNum >= 5 || computerNum >= 5)) {
        return false;
    }
    endGame();
    showResult(playerNum, computerNum);
}

for (const playerBtn of playerBtnArr) {
    playerBtn.addEventListener("click", () => {
        const playerNum = parseInt(playerScore.textContent);
        const computerNum = parseInt(computerScore.textContent);
        const playerSelection = playerBtn.getAttribute("data-selection");
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        const roundScore = updateScore(roundResult, playerNum, computerNum);
        showRoundWinner(roundResult);
        updateComResponse(roundResult, playerSelection, computerSelection);
        checkGame(roundScore.player, roundScore.computer);
        updateRound();
    });
}
