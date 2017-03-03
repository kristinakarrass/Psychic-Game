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
	document.querySelector('#guessesSoFar').innerHTML = "Guessed Letters: " + userGuess; 
	console.log(userGuess);

	if (letters.indexOf(userGuess) !== -1) {

	if (userGuess === computerGuess) {
		wins++;
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		guesses = 9;
		game(computerGuess);
	}

	else if (guesses === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		alert("You loose! The letter was " + computerGuess);
		guesses = 9;
		game(computerGuess);
	}
	else {
		guesses--;
		document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guesses;
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
