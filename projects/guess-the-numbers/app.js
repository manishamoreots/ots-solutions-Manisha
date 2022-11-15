let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
console.log(randomNumber);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector(".lowOrHi");
document.getElementById("lastResult").innerHTML=numberOfAttempts;
// Main Function
function checkGuess() {
  let guess = parseInt(document.getElementById("guessField").value);


  const guessSlot = document.querySelector(".guesses");

  if (guess === randomNumber) {
    document.querySelector(".lowOrHi").innerHTML = "You guessed it correctly!";
    previousGuesses = [];
  } else if (guess > randomNumber) {
    numberOfAttempts--;
    alert("You guessed it more!");
  } else {
    numberOfAttempts--;
    alert("You guessed it less!");
  }

  previousGuesses.push(guess);
  console.log(previousGuesses);
  document.getElementById("guesses").innerHTML = previousGuesses;

   console.log(numberOfAttempts);




  if (numberOfAttempts <= 0 || guess === randomNumber) {

    numberOfAttempts = 10;
    document.getElementById("lastResult").innerHTML = numberOfAttempts;

    previousGuesses = [];
    document.getElementById("guesses").innerHTML = previousGuesses;
    alert("Game Over!");
  }
}
