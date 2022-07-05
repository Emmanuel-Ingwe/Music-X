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
const songs = ['callmeeveryday', 'Asa-Show-Me-Off', 'bora bora'];

// Keep Track Of Songs
let songIndex = 2;

// Initially load song
loadSong(songs[songIndex]);

// UPdate song
function loadSong(song) {
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}
