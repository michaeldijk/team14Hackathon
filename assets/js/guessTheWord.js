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

    // Function / option when key is pressed, and making sure it's an alphabetic Character
    document.onkeypress = function (event) {
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }

    function isAlpha(ch) {
        return /^[A-Z]$/i.test(ch);
    }

    // Update the document with the information needed, for the game
    function updateHtmlDisplay() {
        document.getElementById("totalWins").innerText = totalWins; // total wins update
        document.getElementById("wordHint").innerText = wordHint; // Word hint update
        document.getElementById("currentWord").innerText = wordToGuess.join(""); // Guessing word update
        document.getElementById("remainingGuesses").innerText = numbersGuessed; // Number of guesses done
        document.getElementById("guessedLetters").innerText = lettersGuessed.join(" "); // Adding space between letters guessed
    }

    // Function which is called at the beginning of the game, once key is pressed, then values reset to null/zero, to start the game
    function resetGame() {
        numbersGuessed = maxGuess;
        pauseGame = false;

        // Get a new word and hint from the array of values.
        let randomWordFromArray = Math.floor(Math.random() * possibleOptions.length);
        // Take word to use for game, and store inside "wordToUseForMatch"
        wordToUseForMatch = possibleOptions[randomWordFromArray][0].toUpperCase()
        console.log(wordToUseForMatch);
        // Take a hint to use for game, and store inside "wordHint"
        wordHint = possibleOptions[randomWordFromArray][1].toUpperCase()
        console.log(wordHint);


        // Reset arrays for new game
        lettersGuessed = [];
        wordToGuess = [];

        // Reset the guessed word
        for (var i = 0, j = wordToUseForMatch.length; i < j; i++) {
            if (wordToUseForMatch[i] === " ") {
                wordToGuess.push(" ");
            } else {
                wordToGuess.push("_ ");
            }
        }

        // Update the Display
        updateHtmlDisplay();
    }

    // Game Functions
    // Check if letter is in word & process, play sound, either positive or negative.
    function checkForLetter(letter) {
        var foundLetter = false;
        var correctSound = document.createElement("audio");
        var incorrectSound = document.createElement("audio");
        correctSound.setAttribute("src", "assets/sounds/positive.wav");
        incorrectSound.setAttribute("src", "assets/sounds/negative.wav");

        // Search string for letter
        for (var i = 0, j = wordToUseForMatch.length; i < j; i++) {
            if (letter === wordToUseForMatch[i]) {
                wordToGuess[i] = letter;
                foundLetter = true;
                correctSound.play();
                // If guessing word matches random word
                if (wordToGuess.join("") === wordToUseForMatch) {
                    // Add to # of wins
                    totalWins++;
                    pauseGame = true;
                    updateHtmlDisplay();
                    setTimeout(resetGame, 5000);
                }
            }
        }

        if (!foundLetter) {
            incorrectSound.play();
            // Check if inccorrect guess is already on the list
            if (!lettersGuessed.includes(letter)) {
                // Add incorrect letter to guessed letter list
                lettersGuessed.push(letter);
                // Decrement the number of remaining guesses
                numbersGuessed--;
            }
            if (numbersGuessed === 0) {
                // Display word before reseting game
                wordToGuess = wordToUseForMatch.split();
                pauseGame = true;
                setTimeout(resetGame, 5000);
            }
        }

        updateHtmlDisplay();

    }