
$( document ).ready(function() {
	console.log("ready");

// Global Variables
//===================================================================
var randomNumber;
var userNumbers = [];
var userScore;
var wins = 0;
var losses = 0;

// Gem Variables
var rubyNumber;
var diamondNumber;
var topazNumber;
var emeraldNumber;


// Start Game
//==================================================================

var startGame = function() {
	// Generate Crystal Number between 19 - 120
	randomNumber = Math.floor(Math.random() * (120 - 19) +19);
	// Generate Random Numbers for Gems = 1 - 12
	rubyNumber = Math.floor(Math.random() * 12) + 1;
	diamondNumber = Math.floor(Math.random() * 12) + 1;
	topazNumber = Math.floor(Math.random() * 12) + 1;
	emeraldNumber = Math.floor(Math.random() * 12) + 1;
	userNumbers = [];
	// Test
	// console.log("Crystal Number: " + randomNumber);
	// console.log("Ruby Number: " + rubyNumber);
	// console.log("Diamond Number: " + diamondNumber);
	// console.log("Topaz Number: " + topazNumber);
	// console.log("Emerald Number: " + emeraldNumber);
	// console.log("Numbers Guessed Array: " + userNumbers);
}



// Functions
//===================================================================

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    userScore = userNumbers.reduce(getSum);
}

function pushHtml() {
	var number = "<p> Crystal Number </br></br> " + randomNumber + "</p>"
	var score = "<p> Your Score: " + userScore + "</p>"
	var win = "<p> Wins: " + wins + "</p>"
	var loss = "<p> Losses:  " + losses + "</p>"

	document.querySelector(".randNumber").innerHTML = number;
	document.querySelector(".score").innerHTML = score;
	document.querySelector(".wins").innerHTML = win;
	document.querySelector(".losses").innerHTML = loss;
}


// Events & Game Logic
//===================================================================

startGame();

$(".ruby").click(function() {
	userNumbers.push(rubyNumber);
	myFunction();
	pushHtml()

	if (userScore === randomNumber) {
		wins++
		startGame();
	}
	if (userScore > randomNumber) {
		losses++
		startGame();
	}
	// Test
	// console.log("working");
	// console.log(userNumbers);
	// console.log(userScore);
	// console.log(wins);
	// console.log(losses);
});

$(".diamond").click(function() {
	userNumbers.push(diamondNumber);
	myFunction();
	pushHtml()

	if (userScore === randomNumber) {
		wins++
		startGame();
	}
	if (userScore > randomNumber) {
		losses++
		startGame();
	}
	// Test
	// console.log("working");
	// console.log(userNumbers);
	// console.log(userScore);
	// console.log(wins);
	// console.log(losses);
});

$(".topaz").click(function() {
	userNumbers.push(topazNumber);
	myFunction();
	pushHtml()

	if (userScore === randomNumber) {
		wins++
		startGame();
	}
	if (userScore > randomNumber) {
		losses++
		startGame();
	}
	// Test
	// console.log("working");
	// console.log(userNumbers);
	// console.log(userScore);
	// console.log(wins);
	// console.log(losses);
});

$(".emerald").click(function() {
	userNumbers.push(emeraldNumber);
	myFunction();
	pushHtml()

	if (userScore === randomNumber) {
		wins++
		startGame();
	}
	if (userScore > randomNumber) {
		losses++
		startGame();
	}
	// Test
	// console.log("working");
	// console.log(userNumbers);
	// console.log(userScore);
	// console.log(wins);
	// console.log(losses);
});

});