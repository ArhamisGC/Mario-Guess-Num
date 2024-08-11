
const guessingIpt = document.getElementById("guessing");
const results = document.getElementById("results");
let randomNum = 0;
let numberGuessValue = 0;
let numberGuess = 0;

getRandomNumber();
console.log(randomNum);
function getRandomNumber(){
  randomNum = Math.floor(Math.random() * 10) + 1;
}

function playing(){
  numberGuessValue = guessingIpt.value;
  numberGuess = parseInt(numberGuessValue);
  if(numberGuess === randomNum) {
    console.log("Winner");
    results.innerHTML = "YOU WIN!"
  }else if(numberGuess < randomNum){
    results.innerHTML = "TRY A HIGHER NUMBER!";
  }else{
    results.innerHTML = "TRY A LOWER NUMBER!";
  }
}

function reset(){
  getRandomNumber();
  results.innerHTML = "WHAT IS YOUR GUESS?";
}
