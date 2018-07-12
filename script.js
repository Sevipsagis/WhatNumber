var playerChance = 7;
var gameStatus = false;
yourChance.innerHTML = playerChance;
function restartPage(){
    location.reload();
}
$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    gameInput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            checkedButton.click();
        }
    });
    $("#checkedButton").on("click", function () {
        if (gameStatus != true && playerChance != 0 && gameInput.value != "") {
            var playerNumber = parseInt(gameInput.value);
            console.log(playerNumber);
            if (randomNumber > playerNumber) {
                // gameTitle.innerHTML = "It's too low."
                playerChance--;
                showAlert(1);
            }
            else if (randomNumber < playerNumber) {
                // gameTitle.innerHTML = "It's too high."
                playerChance--;
                showAlert(2);
            }
            else {
                // gameTitle.innerHTML = "It's corrected."
                gameStatus = true;
                showAlert(0);
            }
            yourChance.innerHTML = playerChance;
            if(playerChance == 0 || gameStatus){
                showResult();
            }
        }
    });
    function showAlert(status){
        gameAlert.classList.toggle("hideAlert");
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
            gameAlert.classList.toggle("hideAlert");
            gameAlert.classList.remove("alert-danger");
            gameAlert.classList.remove("alert-success");
        }, 2500);
    }
    function showResult(){
        gameTitle.innerHTML = `The Number is <span style="color: #ff4d4d;">"${randomNumber}"</span>`;
    }
});