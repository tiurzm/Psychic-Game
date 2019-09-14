var cpChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o","p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var userWins = document.getElementById("wins");
var userLosses = document.getElementById("losses");
var gsLeft = document.getElementById("left");
var gsFar = document.getElementById("guess");
var winsScore = 0;
var lossesScore = 0;
var gsScore = 10;
var overScore = 0;


document.onkeyup = function(event) {
var userGuess = event.key; 
var cpGuess = cpChoices[Math.floor(Math.random() * cpChoices.length)];

if (userGuess === cpGuess) {
    winsScore++;
} else {
    lossesScore++;
    gsScore--;
}
userWins.textContent = winsScore; 
userLosses.textContent = lossesScore;
gsLeft.textContent = gsScore;
}; 

//     gsScore = 0;
//     gameOver = true;
// };

// if the gsScore === 0, game is over


