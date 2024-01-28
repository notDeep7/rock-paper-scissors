/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const arrayElement = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * arrayElement.length);
  return arrayElement[random];
}

function getResult(playerChoice, computerChoice) {
  let score;
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
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
  // Otherwise human loses (aka set score to -1)
  // return score
}
let result = document.getElementById("result");
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  if (score == -1) {
    result.innerText = "You Lose!";
  } else if (score == 1) {
    result.innerText = "You Win!";
  } else {
    result.innerText = "Draw!";
  }
}
let scoreTotal = {'playerChoice' : 0 , 'computerChoice' : 0 };
function onClickRPS(playerChoice) {
  console.log(`You chose : ${playerChoice}`);
  const computerCh = getComputerChoice();
  console.log(`Computer chose : ${computerCh}`);
  const scoring = getResult(playerChoice,computerCh);
 
  if (scoring == 1) {
    scoreTotal['playerChoice'] += scoring;
    scoreTotal['computerChoice']-1;
  }else{
    scoreTotal['computerChoice'] -=scoring;
    scoreTotal['playerChoice']-1;
  }
  console.log(scoring);
  console.log(scoreTotal);

}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let rpsButton = document.querySelectorAll(".rpsButton");

  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  rpsButton.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
  // Add a click listener to the end game button that runs the endGame() function on click
}

// ** endGame function clears all the text on the DOM **
function endGame() {}

playGame();
