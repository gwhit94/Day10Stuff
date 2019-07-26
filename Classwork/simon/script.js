var centerButton = document.getElementById("center");
var colorButtons = document.getElementsByClassName("square");

var compPattern = [];
centerButton.addEventListener("click", gameStart);

var gameCounter = 1;
function gameStart(){
    centerButton.innerText = gameCounter++;
    centerButton.removeEventListener("click", gameStart)
    computerChoice();
    buttonPattern();
}

function computerChoice(){
    let compChoice = Math.floor((Math.random())*4);
    compPattern.push(compChoice);
}

function buttonPattern(){
    var counter = 0;
    colorButtons[compPattern[counter]].classList.add("active");

    var intervalRef = window.setInterval(inOrder, 1000);
    
    function inOrder () {
        colorButtons[compPattern[counter]].classList.remove("active");
        if (counter < compPattern.length - 1) {
            counter ++;
            window.setTimeout(function(){colorButtons[compPattern[counter]].classList.add("active")}, 100);
        }
        else {
            window.clearInterval(intervalRef);
            centerButton.addEventListener("click", gameStart)
        }
    }
}

for (var i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener("click", userClick);
}

function userClick(e){
    e.target.classList.add("active");
    window.setTimeout(function(){ e.target.classList.remove("active") }, 20)
}
