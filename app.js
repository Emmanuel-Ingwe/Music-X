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
const songs = ['2', 'posty cooped up', 'show me off', 'call me everyday', '4', '5', '6', 'borrowedLove'];

// Keep Track Of Songs
let songIndex = 1;

// Initially load song
loadSong(songs[songIndex]);

// UPdate song
function loadSong(song) {
    title.innerText = song;
    audio.src = `songs/${song}.mp3`;
    cover.src = `images/${song}.png`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').innerHTML = '=';
    playBtn.querySelector('i.fas').innerText = '/';

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').innerText = '/';
    playBtn.querySelector('i.fas').innerHTML = '=';

    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > 5) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Event Listener
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
        audio.pause();
    } else {
        audio.play();
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
