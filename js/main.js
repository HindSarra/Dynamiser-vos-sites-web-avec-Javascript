// cree des varibles pour commencer le jeu
let player1Score = 0;
let player2Score = 0;
let playTurn = true;
// crees des varibales pour interagir avec le DOM
const player1Dice = document.querySelector(".global-score-1");
const player2Dice = document.querySelector(".global-score-2");
const current1Score = document.querySelector(".current-score-one");
const current2Score = document.querySelector(".current-score-tow");
const rollBtn = document.querySelector(".roll-dice");
const newGameBtn = document.querySelector(".button-new-game");
const hold = document.querySelector(".hold");
const dice = document.querySelector(".dice img");
// les evenements de nos boutons roll hold et new game
rollBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // indiquer sur quel joueur on est

  if (playTurn) {
    dice.style.display = "block";
    dice.src = "./img/dice-" + randomNumber + ".png";
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player1Dice.classList.add("active");
  } else {
    dice.style.display = "block";
    dice.src = "./img/dice-" + randomNumber + ".png";
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player2Dice.classList.add("active");
  }
  //Pour faire tourné le jeu
  if (player2Dice >= 100) {
    rollBtn.style.display = "none";
    newGameBtn.style.display = "block";
  } else {
    newGameBtn.style.display = "block";
  }
});
newGameBtn.addEventListener("click", () => {
  scores = [0, 0, 0];
  roundScore = 0;
  actualPlayer = 1;
  playTurn = true;

  // Remet a zéro tout les scores.
  document.querySelector(".global-score-1").textContent = "0";
  document.querySelector(".global-score-2").textContent = "0";
  document.getElementById("#current-score-one").textContent = "0";
  document.getElementById("#current-score-two").textContent = "0";

  // Changement du nom des joueurs (pour peut etre plus tard).
  document.getElementById("name-player-1").textContent = "Player-1";
  document.getElementById("name-player-2").textContent = "Player-2";

  // Supprime la classe Winner*
  document.querySelector(".player-1").classList.remove("winner");
  document.querySelector(".player-2").classList.remove("winner");

  // Supprime la classe active*
  document.querySelector(".player-1").classList.remove("active");
  document.querySelector(".player-2").classList.remove("active");
  document.querySelector(".player-1").classList.add("active");
  // rendre la dice de base
  dice.src = "./img/dice-" + 0 + ".png";
});
