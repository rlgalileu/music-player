const music = document.querySelector('audio');
const prevbtn = document.querySelector('#prev');
const playbtn = document.querySelector('#play');
const nextbtn = document.querySelector('#next');

let isPlaying = false;

function playSong() {
  isPlaying = true;
  playbtn.classList.replace('fa-play', 'fa-pause');
  playbtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playbtn.classList.replace('fa-pause', 'fa-play');
  playbtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or pause Event Listener
playbtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

