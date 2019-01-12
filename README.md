## TREEHOUSE PROJECT 6 - Game Show App

### Description:

<p>
In this project, you'll create a browser version of “Wheel of Success”, a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.
</br>
Using Javascript, you’ll create an array of phrases and write functions to choose a random phrase from that array, split the phrase into letters, and put those letters onto the game board.
</br>
Each time the player guesses a letter, you’ll need to compare the letter the player has chosen with the random phrase. If the letter is in the phrase, you’ll update the game board with the chosen letters.
</br>
A player can keep choosing letters until they make five incorrect guesses. If the letter they chose isn’t in the phrase, you’ll remove one of the player’s 5 guesses.
</br>
If the player completes the phrase before they run out of guesses, a winning screen will display. If the player guesses incorrectly 5 times, a losing screen will display.
</br>
A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter.
</p>

### Instructions:

<b>
In this project, you'll create a word guessing game. Players will click letters from an onscreen keyboard to try to guess a random phrase. The player’s goal is to guess all the letters in the phrase. A player can keep choosing letters until they make five incorrect guesses. Letters guessed correctly will appear in the phrase. Letters guessed incorrectly will be counted at the bottom of the screen.
</b>

<b>Get the elements you’ll need from your HTML</b>
<ul>
    <li>Get the element with the ID of qwerty and save it to a variable.</li>
    <li>Get the element with the ID of phrase and save it to a variable.</li>
    <li>Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed (remember, if the player guesses wrong 5 times, they lose the game)</li>
</ul>    

<b>Attach a event listener to the “Start Game” button to hide the start screen overlay.</b>

<b>Create a</b> phrases <b>array that contains at least 5 different phrases as strings.</b>
<ul>
    <li>Make sure that each phrase contains only letters and spaces, so players won’t need to guess punctuation or special characters.</li>
</ul>

<b>Create a</b> getRandomPhraseAsArray <b>function.</b>
<ul>
    <li>This function should randomly choose a phrase from the phrases array and split that phrase into a new array of characters. The function should then return the new character array.</li>
    <li>Keep in mind that you’ll need to write this function so that it is reusable-- meaning that it can take any given array of strings (with no special characters) and return an array of characters. To do that, you’ll write the function so that it takes an array as a parameter:</li>
</ul>

    function getRandomPhraseArray(arr){
    //do stuff to any arr that is passed in
    }

and to use the function, you’ll pass in the phrases array as an argument when you call the function:

  getRandomPhraseAsArray(phrases);

<b>Set the game display.</b>
<ul>
    <li>Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, for each character in the array, you’ll create a list item, put the character inside of the list item, and append that list item to the #phrase ul in your HTML. If the character in the array is a letter and not a space, the function should add the class “letter” to the list item.
    </li>
    <li>You’ll need to write the addPhraseToDisplay function so that it can take any array of letters and add it to the display. To do that, the function will need to take an array as a parameter:</li>

      function addPhraseToDisplay(arr){
        // do stuff any arr that is passed in, and add to `#phrase ul`
      }

    <li>To use the function, you’ll get the value returned by the getRandomPhrasesArray, save it to a variable, and pass it to addPhraseToDisplay as an argument:</li>

      "const phraseArray = getRandomPhraseAsArray(phrases);
      addPhrasetoDisplay(phraseArray);"

</ul>

<b>Create a</b> checkLetter <b>function.</b>
<ul>
    <li>The checkLetter function will be used inside of the event listener you’ll write in the next step.</li>
    <li>This function should have one parameter: the button the player has clicked when guessing a letter.</li>
    <li>The checkLetter function should get all of the</li>
    <li>elements with a class of “letter” (remember that we added the letter class to all of the letters and none of the spaces when we made the game display). The function should loop over the letters and check if they match the letter in the button the player has chosen.</li>
    <li>If there’s a match, the function should add the “show” class to the list item containing that letter, store the matching letter inside of a variable, and return that letter.</li>
    <li>If a match wasn’t found, the function should return null.</li>
</ul>
<b>Add an event listener to the keyboard.</b>
<ul>
    <li>Use event delegation to listen only to button events from the keyboard. When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice. Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks. See the MDN documentation for more details.</li>
    <li>Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound. At this point, you can open the index.html file, click any of the letters on the keyboard, and start to see the letters appear in the phrase.</li>
</ul>

<b>Count the missed guesses in the game.</b>
<ul>
    <li>If the checkLetter function returns a null value, the player has guessed the wrong letter. In the keyboard event listener, after checkLetter is called, write a statement to check the value of the letterFound variable. If the value is null, remove one of the tries from the scoreboard. If you haven't created it yet, make sure you have a missed variable to store the state of the scoreboard (initialized to 0). When you remove a try from the scoreboard, make sure to increase the missed count by 1.</li>
</ul>

<b>Create a</b> checkWin <b>function.</b>
<ul>
    <li>Each time the player guesses a letter, this function will check whether the game has been won or lost. At the very end of the keyboard event listener, you’ll run this function to check if the number of letters with class “show” is equal to the number of letters with class “letters”. If they’re equal, show the overlay screen with the “win” class and appropriate text. Otherwise, if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.</li>
</ul>
