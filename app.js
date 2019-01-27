// ====== Variables ======
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const heart = document.querySelectorAll('img');


// ====== 5 phrases array ======
const phrases = [
  'veggie burrito',
  'black coffee',
  'green smoothie',
  'tofu dog',
  'vegan donut'
];

// ====== event listener to “Start Game” ======
startButton.addEventListener('click', () => {
	if (startButton.textContent === 'Start Game') {
		startGame();
		overlay.style.display = 'none';
	} else {
		resetGame();
		startGame();
		overlay.style.display = 'none';
	}
});

// ====== getRandomPhraseAsArray function ======
function getRandomPhraseAsArray(arr) {
	const random = Math.floor(Math.random() * arr.length);
	const randomPhrase = arr[random];
	const characters = randomPhrase.split('');
	return characters;
}

// ====== set game display ======
function addPhraseToDisplay(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		const li = document.createElement('li');
		li.textContent = arr[i];
		ul.append(li);
		const letters = /^[a-z]/;
		if (li.textContent.match(letters)) {
			li.className = 'letter';
		} else {
			li.className = '';
			li.style.margin = '1em';
		}
	}
}

function startGame() {
	const phraseArray = getRandomPhraseAsArray(phrases);
	addPhraseToDisplay(phraseArray);
}

// ====== checkLetter function ======
function checkLetter(letter) {
	const letters = document.querySelectorAll('.letter');
	let matchingLetter;
	let matchCounter = 0;
	for (let i = 0; i < letters.length; i += 1) {
		if (letter === letters[i].textContent) {
			letters[i].className += ' show';
			matchingLetter = letter;
			matchCounter++;
		}
	}
	if (matchCounter > 0) {
		return matchingLetter;
	} else {
		return null;
	}
}

// ====== event listener to the keyboard ======
qwerty.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const button = e.target;
		button.className = 'chosen';
		button.setAttribute('disabled', '');
		const letter = button.textContent;
		const letterFound = checkLetter(letter);
		if (letterFound === null) {
			heart[missed].src = 'images/lostHeart.png';
			button.className = 'wrong';
			missed++;
		}
	}
	checkWin();
});

// ====== checkWin function ======
function checkWin() {
	const totalLetters = document.querySelectorAll('.letter');
	const shownLetters = document.querySelectorAll('.show');
	const h3 = document.createElement('h3');
	if (shownLetters.length === totalLetters.length) {
		removeShowClass();
		overlay.className = 'win';
		overlay.style.display = 'flex';
		startButton.textContent = 'Play Again';
		overlay.appendChild(h3);
		h3.textContent = 'WINNER!';
	} else if (missed >= 5) {
		removeShowClass();
		overlay.className = 'lose';
		overlay.style.display = 'flex';
		startButton.textContent = 'Try Again';
		overlay.appendChild(h3);
		h3.textContent = 'Bummers! You Lost!';
	}
}

function removeShowClass() {
	for (let i = 0; i < ul.children.length; i += 1) {
		ul.children[i].classList.remove('show');
	}
}


function resetGame() {
	missed = 0;
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
	const h3 = document.querySelector('h3');
	h3.parentNode.removeChild(h3);
	for (let i = 0; i < heart.length; i += 1) {
		heart[i].src = 'images/liveHeart.png';
	}
	const keyboard = document.querySelectorAll('#qwerty button');
	for (let i = 0; i < keyboard.length; i += 1) {
		keyboard[i].classList.remove('chosen');
		keyboard[i].classList.remove('wrong');
		keyboard[i].removeAttribute('disabled');
	}
}
