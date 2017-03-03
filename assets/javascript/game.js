var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var computerGuess;


game = function() {

		var computerGuess = letters[Math.floor(Math.random() * letters.length)];
		console.log(computerGuess);

		var guessedLetters = [];

	for (var i = 0; i < 9; i++) {

		document.onkeyup = function(event) {

			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			// function AddAChild() {
			// 	var guessedLetters = document.createElement("td");
			// 	guessedLetters.innerHTML = userGuess;

			// 	var guessedSoFar = document.getElementById("#guessedSoFar");
			// 	guessedSoFar.appendChild(guessedLetters);
			// }
			
			// AddAChild();

			document.querySelector('#guessesSoFar').innerHTML = userGuess; 


			if (letters.indexOf(userGuess) !== -1) { //checks that input is a valid letter

			if (userGuess === computerGuess) { 										//user guesses computer's letter
				alert("You guessed right! You win!");
				wins++;																//number of wins increased by 1
				document.querySelector('#wins').innerHTML = wins;					//updates on page
				document.querySelector('#guessesLeft').innerHTML = 9;				//displays 9 guesses left on page
				guesses = 9;														//resets guesses to 9
				game(computerGuess);											 	//game starts over
			}

			else if (guesses === 0) {												//all guesses used										
				losses++;															//number of losses increased by 1
				document.querySelector("#losses").innerHTML = losses;				//updates on page
				alert("You loose! The letter was " + computerGuess);				//alerts of loss and states letter chosen by computer
				document.querySelector('#guessesLeft').innerHTML = 9;				//displays 9 guesses left on page
				guesses = 9;														//resets guesses to 9		
				game(computerGuess);												//game starts over
			}

			else if (guessedLetters.indexOf(userGuess) !== -1) {					//alerts user if he has already used a letter
				alert("You have already chosen this letter!");
			}

			else {																	//user does not guess right	
				guesses--;															//number of guesses minus 1
				document.querySelector("#guessesLeft").innerHTML = guesses;			//updates nr of guesses on page								
			}
			} // closes if statement
			else {
				alert("Please choose a letter.");
			}

						guessedLetters.push(userGuess);   //pushes guessed Letters into array for comparison and alert

		}	//closes document.onkeyup function

	}	// closes for loop
} // closes function #game

game(computerGuess);
