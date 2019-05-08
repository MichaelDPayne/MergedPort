var p1Num; 
var p2Num;
var isP1Clicked;
var isP2Clicked;

document.querySelector("#p1").addEventListener('click', player1Roll);
document.querySelector("#p2").addEventListener('click', player2Roll);

function play() {

    // Check Winner
    if (p1Num > p2Num) {
        document.querySelector("h1").innerText = "Congratulations Player 1!";
    } else if (p1Num < p2Num) {
        document.querySelector("h1").innerText = "Congratulations Player 2!";
    } else {
        document.querySelector("h1").innerText = "It's a Tie!!!";
    }
    isP1Clicked = false;
    isP2Clicked = false;
        
}

function player1Roll() {
    isP1Clicked = true;
    p1Num = Math.random() * 5;
    p1Num = Math.floor(p1Num) + 1;
    document.querySelector(".player1").setAttribute("src", "images/dice" + p1Num + ".png");
    if (isP2Clicked) {
        play();
    }
}


function player2Roll() {
    isP2Clicked = true;
    p2Num = Math.random() * 5;
    p2Num = Math.floor(p2Num) + 1;
    document.querySelector(".player2").setAttribute("src", "images/dice" + p2Num + ".png");
    if (isP1Clicked) {
        play();
    }
}