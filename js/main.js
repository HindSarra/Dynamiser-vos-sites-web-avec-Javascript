// cree des varibles pour commencer le jeu
let player1Score = 0;
let player2Score = 0;
let playTurn = true;
let playerActuel = 1;
let round = 0;
// crees des varibales pour interagir avec le DOM
const player1Dice = document.querySelector(".global-score-1");
const player2Dice = document.querySelector(".global-score-2");
// const currentScoreOne = document.querySelector("#current-score-one");
// const currentScoreTow = document.querySelector("#current-score-tow");
const rollBtn = document.querySelector(".roll-dice");
const newGameBtn = document.querySelector(".button-new-game");
const hold = document.querySelector(".hold");
let dice = document.querySelector(".dice img");
// les evenements de nos boutons roll hold et new game
rollBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // indiquer sur quel joueur on est

  if (playTurn) {
    dice.style.display = "block";
    dice.src = "./img/dice-" + randomNumber + ".png";
  }
  //Pour faire tourné le jeu
  if (randomNumber !== 1) {
    // On catch le score du round.
    round += randomNumber;
    document.querySelector("#current-score-" + actualPlayer).textContent =
      round;

    // On verifie que le dernier roll est égal
  } else {
    //function new game
  }
});
