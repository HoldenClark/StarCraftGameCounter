let totalGameCount = document.getElementById("totalGameCount2")
let winLossRatio = document.getElementById("winLossRatio")
let countWins = 0
let countLosses = 0
let overallCount = 0

let protossGameCount = document.getElementById("winLossRatioProtoss1")
let terranGameCount = document.getElementById("winLossRatioTerran1")
let zergGameCount = document.getElementById("winLossRatioZerg1")

let protossWinCount = 0
let protossLossCount = 0
let terranWinCount = 0
let terranLossCount = 0
let zergWinCount = 0
let zergLossCount = 0

let protoss = false
let terran = false
let zerg = false

function incrementWin() {
    countWins += 1  
    if (protoss) {
        protossWinCount += 1
    }
    else if (terran) {
        terranWinCount += 1
    }
    else if (zerg) {
        zergWinCount += 1
    }
    incrementAllGames()
}

function incrementLoss() {
    countLosses += 1 
    if (protoss) {
        protossLossCount += 1
    }
    else if (terran) {
        terranLossCount += 1
    }
    else if (zerg) {
        zergLossCount += 1
    }
    incrementAllGames()
}

function incrementAllGames() {
    incrementTotalGames()
    incrementProtossGames()
    incrementTerranGames()
    incrementZergGames()
}

function incrementTotalGames() {
    overallCount += 1
    totalGameCount.textContent = overallCount
    winLossRatio.textContent = countWins + " / " + countLosses
}

function incrementProtossGames() {
    protossGameCount.textContent = protossWinCount + " / " + protossLossCount
}

function incrementTerranGames() {
    terranGameCount.textContent = terranWinCount + " / " + terranLossCount
}

function incrementZergGames() {
    zergGameCount.textContent = zergWinCount + " / " + zergLossCount
}

function changeBackgroundP() {
    //document.body.style.backgroundImage = "url('protoss.png')";
    protoss = true;
    zerg = false;
    terran = false;
}

function changeBackgroundT() {
    //document.body.style.backgroundImage = "url('terran.png')";
    terran = true;
    zerg = false;
    protoss = false;
}

function changeBackgroundZ() {
    //document.body.style.backgroundImage = "url('zerg.png')";
    zerg = true;
    terran = false;
    protoss = false;
}