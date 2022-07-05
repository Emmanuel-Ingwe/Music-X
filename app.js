const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// SoNGS TITLES
const songs = ['2', '1', '16', '3', '4', '5', '6', '12'];

// Keep Track Of Songs
let songIndex = 5;

// Initially load song
loadSong(songs[songIndex]);

// UPdate song
function loadSong(song) {
    title.innerText = song;
    audio.src = `songs/${song}.mp3`;
    cover.src = `images/${song}.png`;
}
