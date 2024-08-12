const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("restBtn");
const guessingIpt = document.getElementById("guessing");
const results = document.getElementById("results");
const lifeId = document.getElementById("life");

let lifeStr = lifeId.innerHTML;
let life = parseInt(lifeStr);

let randomNum = 0;
let numberGuessValue = 0;
let numberGuess = 0;

getRandomNumber();

function getRandomNumber(){
  randomNum = Math.floor(Math.random() * 10) + 1;
}

function playing(){
  numberGuessValue = guessingIpt.value;
  numberGuess = parseInt(numberGuessValue);
  if(numberGuess === randomNum) {
    results.innerHTML = "YOU WIN!";
    playBtn.style.display = 'none';
  }else if(numberGuess < randomNum){
    results.innerHTML = "TRY A HIGHER NUMBER!";
    lifeControl();
  }else{
    results.innerHTML = "TRY A LOWER NUMBER!";
    lifeControl();
  }
}

function reset(){
  getRandomNumber();
  results.innerHTML = "WHAT IS YOUR GUESS?";
  lifeControl('reset');
}

function lifeControl(action){
  if(action === 'reset'){
    life = 100;
    lifeId.innerHTML = "100";
    lifeId.style.backgroundImage = `linear-gradient(to right, red ${life}%, transparent ${life}%)`
    playBtn.style.display = 'initial';
  }else if('subtract'){
    if(life === 20){
      results.innerHTML = "GAME OVER";
      playBtn.style.display = 'none';
    }
    life -= 20;
    lifeId.innerHTML = life;
    lifeId.style.backgroundImage = `linear-gradient(to right, red ${life}%,transparent ${life}%)`;
  }
}
