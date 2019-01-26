// --- Variables---
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');

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
  const random = Math.floor(Math.random()*arr.length);
  return arr[random].split('');
}

console.log(getRandomPhraseArray(phrases));

// --- set game display ---
function addPhraseToDisplay(arr){
  const ul = phrase.firstElementChild;
  for(let i=0; i<arr.length; i+=1){
    const li = appendToElement(ul, "li", "textContent", arr[i]);
    li.className = checkIfLetter(li)?"letter": "space";
  }
}
