var cpChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o","p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var userWins = document.getElementById("wins");
var userLosses = document.getElementById("losses");
var gsLeft = document.getElementById("left");
var gsFar = document.getElementById("guess");
var winsScore = 0;
var lossesScore = 0;
var gsScore = 9;



document.onkeyup = function(event) {
var userGuess = event.key; 
var cpGuess = cpChoices[Math.floor(Math.random() * cpChoices.length)];

if (userGuess === cpGuess) {
    winsScore++; 
} else {
    gsScore--;
}
userWins.textContent = winsScore;
gsLeft.textContent = gsScore;


if (gsScore === 0) {
    lossesScore++;
    reset(); 
}
userLosses.textContent = lossesScore;

plus();


};


function reset(){
    gsScore = 9;
    gsLeft.textContent = 9;
    gsFar.textContent = "";
};


function plus(){
    var newFarP = document.createElement("span");
    userGuess = event.key;
    userGuess = userGuess +", ";
    newFarP.textContent = userGuess;
    gsFar.appendChild(newFarP);
};



// the rules :
// if userGuess === cpGuess, wins
// if userGuess !== cpGuess, decrement gsLeft
// if you don't have gsLeft, you lose
// if you lose, increment the lossesScore and reset the game.

