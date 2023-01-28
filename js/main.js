//Declaration des variable
let scors, playOn, roundScore, actuelPlayer;

//declaration de la function qui initialise le jeu
toInit();

//variable de mon bouton roll-dice
let diceImg = document.querySelector(".dice");
//crées les evenments lorsqu'on clique sur boutton roll-dice
document.querySelector(".roll-dice").addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  if (playOn) {
    //numero entre 1 et 6

    //apple de dés aleatoire
    diceImg.style.display = "block";
    diceImg.src = `./img/dice-${randomNumber}.png`;

    // incrementé dans notre score locale
    if (randomNumber !== 1) {
      roundScore += randomNumber;
      document.querySelector(`#current-${actuelPlayer}`).textContent =
        roundScore;
    }
  } else {
    // passer a l'autre joueur
    switchPlayer();
  }
});

// variable du bouton Hold= recupére
const hold = document.querySelector(".hold");
//evenemet de la variable hold
hold.addEventListener("click", () => {
  if (playOn) {
    //incrementer le score local au score global
    scors[actuelPlayer] += roundScore;
    //selectionner notre score de l'elemnt html
    document.querySelector(`#score-${actuelPlayer}`).textContent =
      scors[actuelPlayer];

    //introduire la valeur du gagnant
    if (scors[actuelPlayer] >= 100) {
      document.querySelector(`#name-${actuelPlayer}`).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(`.player-${actuelPlayer}-side`)
        .classList.add("winner");
      document
        .querySelector(`.player-${actuelPlayer}-side`)
        .classList.remove("active");
      playOn = false;
    } else {
      switchPlayer();
    }
  }
});

function switchPlayer() {
  actuelPlayer === 1 ? (actuelPlayer = 2) : (actuelPlayer = 1);
  roundScore = 0;
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#current-2").textContent = "0";
  document.querySelector(".player-1-side").classList.toggle("active");
  document.querySelector(".player-2-side").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

// la variable de bouton de  nouvelle partie
const newPartie = document.querySelector(".button-new-game");
// evenement du bouton nouvelle partie
newPartie.addEventListener("click", toInit);

//function qui réeinisialise le jeu a zero
function toInit() {
  scors = [0, 0, 0];
  playOn = true;
  roundScore = 0;
  actuelPlayer = 1;

  // document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice").style.display = "block";
  document.querySelector(".dice").src = "./img/dice-0.png";

  document.getElementById("score-1").textContent = "0";
  document.getElementById("score-2").textContent = "0";

  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";
  document.getElementById("name-1").textContent = "Player-1";
  document.getElementById("name-2").textContent = "Player-2";
  document.querySelector(".player-1-side").classList.remove("winner");
  document.querySelector(".player-2-side").classList.remove("winner");
  document.querySelector(".player-1-side").classList.remove("active");
  document.querySelector(".player-2-side").classList.remove("active");
  document.querySelector(".player-1-side").classList.add("active");
}
