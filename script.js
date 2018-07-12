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
                showAlert(1);
            }
            else if (randomNumber < playerNumber) {
                gameTitle.innerHTML = "It's too high."
                playerChance--;
                showAlert(2);
            }
            else {
                gameTitle.innerHTML = "It's corrected."
                gameStatus = true;
                showAlert(0);
            }
            yourChance.innerHTML = playerChance;
        }
    });
    function showAlert(status){
        gameAlert.classList.toggle("d-none");
        if(status==0){
            gameAlert.classList.add("alert-success");
            gameAlert.innerHTML = "Correct!!!"

        }
        else if(status==1){
            gameAlert.classList.add("alert-danger");
            gameAlert.innerHTML = "It's too low!!!"
        }
        else{
            gameAlert.classList.add("alert-danger");
            gameAlert.innerHTML = "It's too high!!!"
        }
        hideAlert();
    }
    function hideAlert(){
        setTimeout(function(){
            gameAlert.classList.toggle("d-none");
        }, 2000);
    }
});