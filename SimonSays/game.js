
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

// Detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
function start() {
    if (!started) {
        nextSequence();
        started = true;
    }
};


$(document).keypress(start);
$(document).click(start);

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkUserPattern();
});

function nextSequence() {

    // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

 
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function checkUserPattern() {

    //console.log("Checking......");
    //console.log("UserArray Size = " + userClickedPattern.length)

    for (var i = 0; i <= userClickedPattern.length - 1; i++) {

        //console.log(i); console.log("User Pattern =" + userClickedPattern); console.log(userClickedPattern[i]); console.log("Game Pattern = " + gamePattern); console.log(gamePattern[i]);
        //console.log("TRUE OR FALSE = " + (userClickedPattern[i] == gamePattern[i]));

        if (userClickedPattern[i] == gamePattern[i]) {
            continue;
        } else {

            playSound("wrong");

            $("body").addClass("game-over");
            setTimeout(function () {  $("body").removeClass("game-over"); }, 200);

            $("#level-title").text("You Reached Level " + level);
            setTimeout(gameOver, 2000);
            return;
        }
    }
    if (userClickedPattern.length == gamePattern.length) {
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
        }
} 

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function gameOver() {

    $("#level-title").text("Game Over")

    setTimeout(function () {
        $("#level-title").text("Press A Key to Start")
        started = false;
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
    }, 2000);
}
