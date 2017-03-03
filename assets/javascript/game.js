var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters, computerGuess;



game = function() {

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
	console.log(computerGuess);

	for (var i = 0; i < 9; i++) {

document.onkeyup = function(event) {

	var userGuess = event.key;
	document.querySelector('#guessesSoFar').innerHTML = userGuess;
	console.log(userGuess);

	if (letters.indexOf(userGuess) !== -1) {

	if (userGuess === computerGuess) {
		wins++;
		document.querySelector('#wins').innerHTML = wins;
		guesses = 9;
	}

	else if (guesses === 0) {
		losses++;
		alert("You loose! The letter was " + computerGuess);
	}
	else {
		guesses--;
		console.log(guesses);
	}
	} // closes if statement
	else {
		alert("Please choose a letter.");
	}
}
}	// closes for loop
} // closes function #game

game(computerGuess);
