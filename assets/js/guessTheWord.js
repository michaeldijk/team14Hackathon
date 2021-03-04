// default variables
const maxGuess = 10; // maximum 10 guesses per game
let pauseGame = false;
let lettersGuessed = []; //emtpy variable to store the letters used for guessing
let wordToGuess = []; // empty variable to store the word to be guessed
let wordToUseForMatch;
let numbersGuessed;
let totalWins = 0; // start total wins at "0"
let wordHint = []; // empty variable to store the word hint

// IDs for the game fields
// =======================================
// wins: #wins
// guesses remaining: #guessesRemaining
// hint: #hint
// word insert: #wordInsert
// letters guessed: #lettersGuessed
// =======================================

// Possible options and hint variable
let possibleOptions = [
    ["leprechaun", "a little guy"], // 1st option
    ["Ireland1", "A famous country for St. P-day"], //2nd option
    ["Ireland2", "A famous country for St. P-day"], //3nd option
    ["Ireland3", "A famous country for St. P-day"], //4nd option
    ["Ireland4", "A famous country for St. P-day"], //5nd option
    ["Ireland6", "A famous country for St. P-day"], //6nd option
    ["Ireland7", "A famous country for St. P-day"], //7nd option
    ["Ireland8", "A famous country for St. P-day"], //8nd option
    ["Ireland9", "A famous country for St. P-day"], //9nd option
    ["Ireland10", "A famous country for St. P-day"], //10th option
];

// get a new word
// using math floor, to get a random word/hint from the array
let randomIndex = Math.floor(Math.random() * possibleOptions.length);

wordToMatch = possibleOptions[randomIndex][0].toUpperCase()
console.log(wordToMatch); // to check if it works, will remove soon
wordHint = possibleOptions[randomIndex][1].toUpperCase()
console.log(wordHint); // to check if it works, will remove soon