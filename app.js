const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

// event handler - not correct ===>>
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  overlay.style.color = "red";
});
