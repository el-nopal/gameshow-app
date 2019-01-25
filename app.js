// --- Variables---
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset')

let missed = 0;

// --- 5 phrases array ---
const phrases = [
  'veggie burrito',
  'black coffee',
  'green smoothie',
  'tofu dog',
  'vegan donut'
];

// --- event listener to “Start Game” ---
startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

// --- getRandomPhraseAsArray function ---
function getRandomPhraseArray(arr) {
  const randomItem = arr[Math.floor(Math.random()*arr.length)];
  const newArr = [];
//Split and Return new character array
    for (let i = 0; i < randomItem.length; i += 1) {
      newArr.push(randomItem[i]);
 }
 return newArr;
}

console.log(getRandomPhraseArray(phrases));
