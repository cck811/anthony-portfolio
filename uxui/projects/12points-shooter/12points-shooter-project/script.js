(function(){
    'use strict'; 
    console.log('Reading JS');

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Initialize variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 
    
    const playerScores = [0, 0]; // An array to hold scores of the two players
    let currentPlayer = 0; // Variable to track the current player (0 for Player 1 and 1 for Player 2)
    const winningScore = 12; // Score needed to win the game

    let turnsTakenThisRound = 0;  // Counter for turns taken in the current round.
    let usedLuckThisTurn = false; // Track if the Luck Button has been used this turn

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Get Elements~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 
    
    const scoreElements = [
        document.querySelector('#player1 .score-value'), // Element of Player 1's score
        document.querySelector('#player2 .score-value')  // Element of Player 2's score
    ];// Elements for displaying scores
    const testLuckButton = document.getElementById('testLuckButton'); // Element of Luck Button
    const messageDiv = document.getElementById('messages'); // Element for general game messages
    const turnMessageDiv = document.getElementById('turnMessages'); // Element for turn-specific messages
    const winningScreenBackground = document.getElementById('winning-screen-background'); // Element of winning screen background
    const winningScreen = document.getElementById('winning-screen'); //Element of winning screen
    const winningMessageDiv = document.getElementById('winning-messages'); //Element of the message of winning screen 
    const startGameButton = document.getElementById('startgame'); // Element of Start New Game Button
    const cardButtons = document.querySelectorAll('.card'); // Collection of all the card buttons
    const gunSound = new Audio('sound/shot.mp3'); // Gun sound effect
    const winSound = new Audio('sound/win.mp3'); // Winning sound effect

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to initialize game~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    function startGame() { // Function for resetting game
        playerScores[0] = 0; // Reset Player 1's score
        playerScores[1] = 0; // Reset Player 2's score
        currentPlayer = 0; // Set the current player to Player 1
        let shuffledCards = shuffleCards(); // Shuffle card values
        cardButtons.forEach((button, index) => {// Assign shuffled values to each card buttons
            button.dataset.value = shuffledCards[index];
        });

        updateScores(); // Update the scores display

        messageDiv.textContent = "Player 1 starts the game!"; // Display starting player message
        turnMessageDiv.textContent = "Pick a Card!"; // Display turn message

        startGameButton.style.display = 'none'; // Hide the start game button
        winningScreen.style.display = 'none'; // Hide winning screen.
        winningScreenBackground.style.display = 'none';// Hide winning screen background.

        resetTestMyLuck(); // Reset the Luck Button state.
    }

    // Function to update scores on the screen
    function updateScores() {
        scoreElements[0].textContent = playerScores[0]; // Update Player 1's score display
        scoreElements[1].textContent = playerScores[1]; // Update Player 2's score display
    }

    // Function to reset the Luck Button state.
    function resetTestMyLuck() { 
        usedLuckThisTurn = false;
        testLuckButton.disabled = false;
        testLuckButton.textContent = 'Test My Luck';
    }

    testLuckButton.addEventListener('click', function() { // Event listener for Luck Button.
        usedLuckThisTurn = true;
        testLuckButton.disabled = true; // Disable the button after use
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to show instruction overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    document.addEventListener('DOMContentLoaded', (event) => { // Event listener upon entering site
        const instructionsOverlay = document.getElementById('instructions-overlay'); // Element of the instruction overlay
        const showInstructionsBtn = document.getElementById('show-instructions');// Element of ? button
        const closeInstructionsBtn = document.getElementById('close-instructions');// Element of Close button

        // Show the overlay when the page loads
        instructionsOverlay.style.display = 'block';

        // Hide overlay when "Close" is clicked
        closeInstructionsBtn.addEventListener('click', function() { 
            instructionsOverlay.style.display = 'none';
        });
    
        // Toggle overlay visibility when ? button is clicked
        showInstructionsBtn.addEventListener('click', function() {
            if (instructionsOverlay.style.display === 'none') {
                instructionsOverlay.style.display = 'block';
            } else {
                instructionsOverlay.style.display = 'none';
            }
        });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to shuffle card values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    function shuffleCards() {
        let cardValues = [1, 2, 3, 4, 5, 6]; // Array of card values
        for (let i = cardValues.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Generate a random index
            [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]]; // Swap elements
        }
        return cardValues; // Return the shuffled array
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Function to handle card pick~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    function pickCard(event) {
        let cardValue = parseInt(event.target.dataset.value); // Get the value of the clicked card
        
        switch (cardValue) { // Switch statement for different card values
            case 1:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 1 point!`;
                break;
            case 2:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 2 point!`;
                break;
            case 3:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 3 point!`;
                break;
            case 4:
                playerScores[currentPlayer] += cardValue;
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} gained 4 point!`;
                break;
            case 5:
                // Reduce player score by 2
                playerScores[currentPlayer] = Math.max(0, playerScores[currentPlayer] - 2);
                turnMessageDiv.textContent = `Player ${currentPlayer + 1} loses 2 point!`;
                break;
            case 6:
                // Reset player's score
                playerScores[currentPlayer] = playerScores[currentPlayer] - playerScores[currentPlayer];
                turnMessageDiv.textContent = `Player ${currentPlayer + 1}'s lost all scores!`;
                break;
        }

        // Shuffle the cards after handling the current pick
        let shuffledCards = shuffleCards();
        cardButtons.forEach((button, index) => {
            button.dataset.value = shuffledCards[index];
        });

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Luck Button Logic~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        // Increment turn counter and check if turn should be switched.
        turnsTakenThisRound++; 
        if (!usedLuckThisTurn || turnsTakenThisRound >= 2) {
            switchPlayer();
        }
        if (!usedLuckThisTurn || unknown) {
            switchPlayer();
        }
        // Function to switch to the next player.
        function switchPlayer() {
            currentPlayer = (currentPlayer + 1) % 2; // Switch to next player
            resetTestMyLuck(); // Reset Test My Luck state
            turnsTakenThisRound = 0; // Reset turns taken
            messageDiv.textContent = `It's Player ${currentPlayer + 1}'s turn.`;
        }
        
        testLuckButton.addEventListener('click', function() {
            usedLuckThisTurn = true;
            testLuckButton.disabled = true;
            turnsTakenThisRound = 0; // Reset turns taken since player is using their luck turn
        });

        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Check winning condition~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

        if (playerScores[currentPlayer] >= winningScore) {
            // Declare current player as winner
            messageDiv.textContent = `Player ${currentPlayer + 1} wins with ${playerScores[currentPlayer]} points!`;
            winningScreenBackground.style.display = 'block';
            winningScreen.style.display = 'flex';
            winningMessageDiv.textContent = `Congratulations! You've won!`;
            winSound.play();

            startGameButton.style.display = 'block'; // Show the start game button
            startGameButton.textContent = 'Start a New Game';
            
        } else {
            // Switch to the other player's turn
            currentPlayer = (currentPlayer + 1) % 2;
            messageDiv.textContent = `It's Player ${currentPlayer + 1}'s turn.`;

        }
        
        updateScores(); // Update the scores display
    }

    cardButtons.forEach(button => {     // Event listeners for each card buttons for picking cards
        button.addEventListener('click', pickCard);
    });
    
    // Add event listener to start game button
    startGameButton.addEventListener('click', startGame);

    document.addEventListener('DOMContentLoaded', (event) => {
        const img = document.getElementById('clickImage');
        document.body.addEventListener('click', function (e) {
            gunSound.play();
            gunSound.volume = 0.6;

            // Show the image if it's not visible
            img.style.display = 'block';
    
            // Position the image at the click coordinates
            img.style.left = e.pageX + 'px';
            img.style.top = e.pageY + 'px';
        });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~Run game~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    startGame();// Start the game for the first time

})();
