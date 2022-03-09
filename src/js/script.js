const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const image = document.querySelector('img');
const music = document.querySelector('audio');
const prevBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');

const songs = [{
    name: 'music-1',
    displayName: 'Electric Chill Machine',
    artist: 'Mr. Robot',
  }, {
    name: 'music-2',
    displayName: 'Seven Nations Army (Remix)',
    artist: 'Mr. Robot',
  }, {
    name: 'music-3',
    displayName: 'Goodnight, Disco Queem',
    artist: 'Mr. Robot',
  }, {
    name: 'music-4',
    displayName: 'Front Row (Remix)',
    artist: 'Mr. Robot',
  },
];

let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `src/music/${song.name}.mp3`;
  image.src = `src/img/image-${song.name[song.name.length - 1]}.jpg`;
}

let currentSong = 0;
const totalOfSongs = songs.length - 1;

function nextSong() {
  currentSong++;
  if (currentSong > totalOfSongs) currentSong = 0;

  loadSong(songs[currentSong]);
  playSong();
}

function prevSong() {
  currentSong--;
  if (currentSong < 0) currentSong = totalOfSongs;

  loadSong(songs[currentSong]);
  playSong();
}

loadSong(songs[currentSong]);

function updateProgressBar(event) {
  if (isPlaying) {
    const { duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
