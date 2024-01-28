//Getting computer Choice in random by using array
function getComputerChoice() {
  const arrayElement = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * arrayElement.length);
  return arrayElement[random];
}
//for getting results
function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}
//for showing results in DOM
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("scorePlayer");
  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 1) {
    resultDiv.innerText = "You Win!";
  } else {
    resultDiv.innerText = "Its Draw!";
  }
  handsDiv.innerText = `👨${playerChoice} vs 🤖${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${scoreTotal["playerChoice"]} Computer Score: ${scoreTotal["computerChoice"]}`;
}
//storing calculated total scores
let scoreTotal = { playerChoice: 0, computerChoice: 0 };

function onClickRPS(playerChoice) {
  // console.log(`You chose : ${playerChoice}`);
  const computerCh = getComputerChoice();
  // console.log(`Computer chose : ${computerCh}`);
  const scoring = getResult(playerChoice, computerCh);
  //logic behind storing the results in array
  if (scoring == 1) {
    scoreTotal["playerChoice"] += scoring;
    scoreTotal["computerChoice"] - 1;
  } else {
    scoreTotal["computerChoice"] -= scoring;
    scoreTotal["playerChoice"] - 1;
  }
  // console.log(scoring);
  // console.log(scoreTotal);
  showResult(scoring, playerChoice, computerCh);
}
//Adding event Listeners
function playGame() {
  let rpsButton = document.querySelectorAll(".rpsButton");

  rpsButton.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  endGameButton.onclick = () => endGame();
}
//for resetting the values and the DOM
function endGame() {
  const endResult = document.getElementById("result");
  const endHands = document.getElementById("hands");
  const endScoreDiv = document.getElementById("scorePlayer");

  endResult.innerText = "";
  endHands.innerText = "";
  endScoreDiv.innerText = "";
  scoreTotal["playerChoice"] = 0;
  scoreTotal["computerChoice"] = 0;
}

playGame();
