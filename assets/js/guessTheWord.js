// default variables
    const maxGuess = 10; // maximum 10 guesses per game easy
    let pauseGame = false;
    let lettersGuessed = []; //emtpy variable to store the letters used for guessing
    let wordToGuess = []; // empty variable to store the word to be guessed
    let wordToUseForMatch; // empty variable to store the array in.
    let numbersGuessed; // empty variable to store the amount of guesses in. Which will be deducted in the function
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
    ]; // done

    resetGame();