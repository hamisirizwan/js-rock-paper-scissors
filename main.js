// const rockButton = document.getElementById("rock")

// rockButton.addEventListener("click", function(){
//     alert("You clicked rock")
// })

const resultEl = document.getElementById("result");
const userOptionEl = document.getElementById("userOption");
const computerOptionEl = document.getElementById("computerOption");

const options = ["rock", "paper", "scissors"];


// get the current score
const score = {
    user:0,
    computer:0
}

const savedData = JSON.parse(localStorage.getItem("currentScore"))

score.user = savedData.user
score.computer = savedData.computer

document.getElementById("computerScore").innerHTML = score.computer
  document.getElementById("userScore").innerHTML = score.user
  
function playGame(userSelected) {
  // get what the user has selected - done

  userOptionEl.innerHTML = userSelected
  // generate the computer selection
  const randomIndex = Math.floor(Math.random() * 3)
  const computerSelection = options[randomIndex];

  computerOptionEl.innerHTML = computerSelection
  // write conditionals to check who has won

  if (userSelected === "rock" && computerSelection === "paper") {
    score.computer += 1
    resultEl.innerHTML = "the computer has won";
  } else if (userSelected === "paper" && computerSelection === "rock") {
    score.user += 1
    resultEl.innerHTML = "the user has won";
  } else if (userSelected === "scissors" && computerSelection === "paper") {
    score.user += 1
    resultEl.innerHTML = "the user has won";
  } else if (userSelected === "paper" && computerSelection === "scissors") {
    score.computer += 1
    resultEl.innerHTML = "the computer has won";
  } else if (userSelected === "rock" && computerSelection === "scissors") {
    score.user += 1
    resultEl.innerHTML = "the user has won";
  } else if (userSelected === "scissors" && computerSelection === "rock") {
    score.computer += 1
    resultEl.innerHTML = "the computer has won";
  } else if (userSelected === computerSelection) {
    resultEl.innerHTML = "it's a draw";
  } else {
    resultEl.innerHTML = "invalid input";
  }

// save the current score

localStorage.setItem("currentScore", JSON.stringify(score) )
  document.getElementById("computerScore").innerHTML = score.computer
  document.getElementById("userScore").innerHTML = score.user
//   console.log(score)
}
