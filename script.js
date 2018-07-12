var playerChance = 7;
var gameStatus = false;
$(document).ready(function() {
    var randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);

    $(checkedButton).on("click", function(){
        var playerNumber = parseInt(gameInput.value);
        console.log(playerNumber);
        if(randomNumber > playerNumber){
            gameTitle.innerHTML = "It's too low."
            playerChance--;
        }
        else if(randomNumber < playerNumber){
            gameTitle.innerHTML = "It's too high."
            playerChance--;
        }
        else{
            gameTitle.innerHTML = "It's corrected."
            gameStatus = true;
        }
    });
});