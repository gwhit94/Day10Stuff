let centerButton = document.getElementById("center");
let colorButtons = document.getElementsByClassName("square");
let compPattern = [];

var gameCounter = 1;
var userCounter = 0;

for (var i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener("click", userClick);
};

centerButton.addEventListener("click", gameStart);

function gameStart(){
    canPlay = false;
    centerButton.innerText = gameCounter;
    centerButton.removeEventListener("click", gameStart)
    buttonPattern();
}

function computerChoice(){
    let compChoice = Math.floor((Math.random())*4);
    compPattern.push(compChoice);
}

function buttonPattern(){
    computerChoice();
    var counter = 0;
    window.setTimeout(function(){colorButtons[compPattern[counter]].classList.add("active")}, 100);

    var intervalRef = window.setInterval(inOrder, 1000);
    
    function inOrder () {
        colorButtons[compPattern[counter]].classList.remove("active");
        if (counter < compPattern.length - 1) {
            counter ++;
            window.setTimeout(function(){colorButtons[compPattern[counter]].classList.add("active")}, 100);
        }
        else {
            userCounter = 0;
            gameCounter++;
            window.clearInterval(intervalRef);
            centerButton.addEventListener("click", gameStart)
        }
    }
}

function userClick(e){
    e.target.classList.add("active");
    window.setTimeout(function(){ e.target.classList.remove("active") }, 20);
    var index = -1;
    switch (e.target.id) {
        case "green":
            index = 0;
            break;
        case "red":
            index = 1;
            break;
        case "blue":
            index = 2;
            break;
        case "yellow":
            index = 3;
    }
    if (index == compPattern[userCounter]){
        console.log(true);
        userCounter++;
        if ( userCounter == gameCounter - 1){
            gameStart();
        }
    } else {
        console.log(false);
        centerButton.innerText = `You Lose! Try again?`;
        compPattern = [];
        gameCounter = 1;
        userCounter = 0;

    }
}
