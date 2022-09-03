//Declaration des variable
let scors, playOn, roundScore, actuelPlayer;

//declaration de la function qui initialise le jeu
toInit();

//variable de mon bouton roll-dice
const rollBtn = document.querySelector(".roll-dice");

//crées les evenments lorsqu'on clique sur boutton roll-dice

rollBtn.addEventListener("click", () => {
  if (playOn) {
    //numero entre 1 et 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    //apple de dés aleatoire
    let diceImg = document.querySelector(".dice");
    diceImg.style.display = "block";
    diceImg.src = `./img/dice-${randomNumber}.png`;

    // incrementé dans notre score locale
    if (randomNumber !== 1) {
      roundScore += randomNumber;
      let current = (document.querySelector(
        "#current-" + actuelPlayer
      ).textContent = roundScore);
      console.log(current);
    }
  }
});

//function qui réeinisialise le jeu a zero
function toInit() {
  scors = [0, 0];
  playOn = true;
  roundScore = 0;
  actuelPlayer = 1;

  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#score-2").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#current-2").textContent = "0";
  document.querySelector("#name-1").textContent = "Player-1";
  document.querySelector("#name-2").textContent = "Player-2";
}
