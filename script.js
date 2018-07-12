var playerChance = 7;
var gameStatus = false;
yourChance.innerHTML = playerChance;
$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    $(checkedButton).on("click", function () {
        if (gameStatus != true && playerChance != 0 && gameInput.value != "") {
            var playerNumber = parseInt(gameInput.value);
            console.log(playerNumber);
            if (randomNumber > playerNumber) {
                gameTitle.innerHTML = "It's too low."
                playerChance--;
                gameAlert.classList.toggle("d-none");
            }
            else if (randomNumber < playerNumber) {
                gameTitle.innerHTML = "It's too high."
                playerChance--;
                gameAlert.classList.toggle("d-none");
            }
            else {
                gameTitle.innerHTML = "It's corrected."
                gameStatus = true;
            }
            yourChance.innerHTML = playerChance;
        }
    });
});