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
        ["Guinness", "A famous Beer Brand"], //2nd option
        ["Opera house", "What building of Sydney do you see?"], //3nd option
        ["Ireland", "A famous country for St. P-day"], //4nd option
        ["Saint Paddys Day", "Short name for St. P-day"], //5nd option
        ["Chicago", "Where is the river green?"], //6nd option
        ["march", "Which month is St. P-day celebrated..."], //7nd option
        ["Roman Britain", "Where was St. Patrick born?"], //8nd option
        ["Christianity", "What arrival was celebrated?"], //9nd option
        ["Irish", "Which heritage and culture is celebrated?"], //10th option
        ["Green", "What's the Dress Code?"], //11th option
        ["shamrock", "What is the leaf/sprig called?"], //12th option
        ["shamrock", "What is the leaf/sprig called?"], //13th option
        ["boston", "Where was the first parade ever? A US city..."], //14th option
        ["snakes", "What did St. Patrick banished from Ireland?"], //15th option
        ["Cream", "What would you pour on top of an Irish coffee?"], //16th option
        ["Mountains", "What are the Twelve Bens?"], //17th option
    ];

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

    document.getElementById("currentWord").addEventListener('click', function(e){ 
        e.preventDefault();
   });

    // Update the document with the information needed, for the game
    function updateHtmlDisplay() {
        document.getElementById("totalWins").innerText = totalWins; // total wins update
        document.getElementById("wordHint").innerText = wordHint; // Word hint update
        document.getElementById("currentWord").value = wordToGuess.join(""); // Guessing word update
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
        for (let i = 0, j = wordToUseForMatch.length; i < j; i++) {
            if (wordToUseForMatch[i] === " ") {
                wordToGuess.push(" ");
            } else {
                wordToGuess.push("_ ");
            }
        }

        // Update the Display
        updateHtmlDisplay();
    }

    // Game Functions come here
    // Check if letter is in word & process, play sound, either positive or negative sound depending on the answer given
    function checkForLetter(letter) {
        let foundLetter = false;
        let correctSound = document.createElement("audio");
        let incorrectSound = document.createElement("audio");
        correctSound.setAttribute("src", "assets/sounds/positive.wav");
        incorrectSound.setAttribute("src", "assets/sounds/negative.wav");

        // Search string for letter
        for (let i = 0, j = wordToUseForMatch.length; i < j; i++) {
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