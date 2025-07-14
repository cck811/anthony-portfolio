( function(){
    'use strict';
    console.log('Reading JS');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]");
    const storyOverlay = document.getElementById('story-overlay')
    const closeBtn = document.getElementById('close');

    //Get story elements
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
    
    // Words for each category
    const animals = ['dog', 'cat', 'bunny', 'giraffe', 'kangaroo'];
    const vehicles = ['car', 'bicycle', 'scooter', 'truck', 'airplane'];
    const exclamations = ['Wow', 'Oops', 'Hey', 'Ohhh', 'Hurray'];
    const names = ['Anthony', 'Jordan', 'Jhonny', 'Timmy', 'Mary'];
    const emotions = ['happy', 'sad', 'excited', 'nervous', 'relaxed'];
    const sports = ['soccer', 'basketball', 'chess', 'tennis', 'football'];

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Stories~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    // Add event listener to Random button
    const randomBtn = document.getElementById('random');
    randomBtn.addEventListener('click', fillRandomWords);

    // Function to fill input fields with random words
    function fillRandomWords() {
        document.getElementById('word1').value = getRandomWord(animals);
        document.getElementById('word2').value = getRandomWord(vehicles);
        document.getElementById('word3').value = getRandomWord(exclamations);
        document.getElementById('word4').value = getRandomWord(names);
        document.getElementById('word5').value = getRandomWord(emotions);
        document.getElementById('word6').value = getRandomWord(sports);
    }

    // Get random word from the arrays
    function getRandomWord(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Instructions overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

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
    
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Story Overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    closeBtn.addEventListener('click', function() { 
        storyOverlay.style.display = 'none';
    });

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        processFormData(formData);
        storyOverlay.style.display = 'block';
    });

    function processFormData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;
        
        for (const eachWord of formData) {
            if( eachWord.value ){
                words.push(eachWord.value);
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }
        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        } else {
            const storyVersion = Math.floor(Math.random() * 3);
            switch (storyVersion) {
                case 0:
                    makeMadlib(words);
                    break;
                case 1:
                    makeMadlibVersion2(words);
                    break;
                case 2:
                    makeMadlibVersion3(words);
                    break;
            }
        }
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field ${errorId}`;
        madlib.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Stories~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    // First story template
    function makeMadlib(words){
        p1.innerHTML = `One sunny day, a ${words[0]} named ${words[3]} decided to go to the park. As it strolled along the path a ${words[1]} suddenly zoomed by.`;
        p2.innerHTML = `"${words[2]}!" shouted ${words[3]}, as it jumped out of the way. The ${words[0]} then stumbled upon a picnic blanket, where it found a basket full of chips and chocolates. Feeling peckish, ${words[3]} decided to snack on them.`; 
        p3.innerHTML = `Afterward, the ${ words[0] } felt ${ words[4] }. It decided to join a game of ${ words[5] } that some children were playing nearby.The game was intense, and ${ words[3] } proved to be quite skilled at it.`;
        p4.innerHTML = `As the sun began to set, ${words[3]} headed home, thinking about all the wild and wacky adventures it had at the park that day. It couldn't wait to return and see what new adventures awaited.`;

        for( const eachField of formData){
            eachField.value = '';
        }
    }
    // Second story template
    function makeMadlibVersion2(words) {
        p1.innerHTML = `Deep in the dense jungle, a ${words[0]} named ${words[3]} was skillfully maneuvering an old ${words[1]} thorugh the rough and bumpy terrain.`;
        p2.innerHTML = `It was not a smooth ride but a lot of fun to drive on. Out of the blue, ${words[3]} yelled "${words[2]}!" spotting a hidden path in the bushy green, which leads to an ancient, overgrown treasure site.`;
        p3.innerHTML = `Intrigued and feeling ${words[4]}, ${words[3]} ventured down the path, suddently some strange noises surrounded the area, revealing a lively group of explorers playing a game of ${words[5]}.`;
        p4.innerHTML = `${words[3]} joined the exciting game, going on the unforgettable jungle adventure, forming lasting bonds with new companions along the way.`;
    }


    // Third story template
    function makeMadlibVersion3(words) {
        p1.innerHTML = `In the magical imaginary world of Madlibia, a ${words[0]} named ${words[3]} stumbled upon a broken ${words[1]} in a dreamy meadow.`;
        p2.innerHTML = `While exploring the dager yet exciting world, ${words[3]} screamed "${words[2]}" in amazement upon discovering a majestic, floating castle hiding in the clouds high above.`;
        p3.innerHTML = `${words[3]} fixed the broken ${words[1]} and drove up to the castle via a hidden path, ${words[3]} was overwhelmed but ${words[4]} ay the same time, it turns out there was a grand ${words[5]} contest in the middle of the castle.`;
        p4.innerHTML = `The eventful day concluded with ${words[3]} triumphantly being crowned the victor, a magical experience etched in their memory for eternity.`;
    }
    

    
} )();
