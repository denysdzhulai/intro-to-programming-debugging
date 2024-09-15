const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const messages = document.getElementsByClassName("message");
const tooHighMessage = document.getElementById("too-high");
const tooLowMessage = document.getElementById("too-low");
const maxGuessesMessage = document.getElementById("max-guesses");
const numberOfGuessesMessage = document.getElementById("number-of-guesses");
const correctMessage = document.getElementById("correct");

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  const guess = parseInt(guessInput.value, 10);
  attempts += 1;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = "";

    submitButton.disabled = true;
    guessInput.disabled = true;
  } else {
    if (guess < targetNumber) {
      tooLowMessage.style.display = "";
    } else {
      tooHighMessage.style.display = "";
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = "";

  resetButton.style.display = "";
}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = "none";
  }
}

function setup() {
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  attempts = 0;

  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = "none";
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", setup);

setup();
