import { App } from './views/App';
import albums from '../src/mocks/albums.json';
import './index.css';

const root = document.querySelector('#root');

root!.innerHTML = App();

const tracks = document.getElementsByClassName('tracks');
const player = document.getElementsByClassName('play')[0];
const next = document.getElementsByClassName('next')[0];
const prev = document.getElementsByClassName('prev')[0];

const pauseSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pauseSVG.setAttribute('d', 'M14 19H18V5H14V19ZM6 19H10V5H6V19Z');
pauseSVG.style.fill = 'black';

const playSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path');
playSVG.setAttribute('d', 'M8 5.14001V19.14L19 12.14L8 5.14001Z');
playSVG.style.fill = 'black';

let playing = false;
let clickedIndex: number | null = null;
let classClicked = 'clicked';
let trackIndex: number;
let artistIndex: number;
let music: HTMLAudioElement;

for (let i = 0; i < tracks.length; i++) {
  tracks[i].addEventListener('click', () => {
    music?.pause();
    playing = false;

    if (i === 3) trackIndex = 0;
    if (i === 4) trackIndex = 1;
    if (i === 5) trackIndex = 2;

    if (i < 3) trackIndex = i;

    if (i > 2) artistIndex = 1;
    if (i < 3) artistIndex = 0;

    if (clickedIndex !== null && clickedIndex !== i) {
      tracks[clickedIndex!].classList.remove(classClicked);

      clickedIndex = i;

      tracks[i].classList.add(classClicked);

      music = new Audio(albums[artistIndex].tracks[trackIndex!].url);

      music.play();

      playing = true;
      player.removeChild(player.firstElementChild!);
      player.appendChild(pauseSVG);
      return;
    }

    clickedIndex = i;

    music = new Audio(albums[artistIndex].tracks[trackIndex!].url);
    music.play();
    playing = true;

    tracks[i].classList.add(classClicked);
    player.removeChild(player.firstElementChild!);
    player.appendChild(pauseSVG);
    return;
  });
}

player.addEventListener('click', () => {
  if (clickedIndex === null) {
    trackIndex = 0;
    artistIndex = 0;
    clickedIndex = 0;

    music = new Audio(albums[artistIndex].tracks[trackIndex].url);
    tracks[trackIndex].classList.add(classClicked);
    player.removeChild(player.firstElementChild!);
    player.appendChild(pauseSVG);

    music.play();
    playing = true;
    return;
  }

  if (playing) {
    playing = false;
    player.removeChild(player.firstElementChild!);
    player.appendChild(playSVG);
    music?.pause();
  } else {
    playing = true;
    player.removeChild(player.firstElementChild!);
    player.appendChild(pauseSVG);
    music?.play();
  }
});

next.addEventListener('click', () => {
  if (clickedIndex === null) return;

  music?.pause();
  player.removeChild(player.firstElementChild!);
  player.appendChild(playSVG);

  playing = false;
  tracks[clickedIndex].classList.remove(classClicked);
  clickedIndex += 1;

  if (clickedIndex === 3) trackIndex = 0;
  if (clickedIndex === 4) trackIndex = 1;
  if (clickedIndex === 5) trackIndex = 2;

  if (clickedIndex > 5) {
    trackIndex = 0;
    artistIndex = 0;
    clickedIndex = 0;
  }

  if (clickedIndex < 3) trackIndex = clickedIndex;

  if (clickedIndex > 2) artistIndex = 1;
  if (clickedIndex < 3) artistIndex = 0;

  music = new Audio(albums[artistIndex].tracks[trackIndex].url);

  music.play();
  playing = true;

  player.removeChild(player.firstElementChild!);
  player.appendChild(pauseSVG);

  tracks[clickedIndex].classList.add(classClicked);
});

prev.addEventListener('click', () => {
  if (clickedIndex === null) return;

  music?.pause();
  player.removeChild(player.firstElementChild!);
  player.appendChild(playSVG);

  playing = false;
  tracks[clickedIndex].classList.remove(classClicked);
  clickedIndex -= 1;

  if (clickedIndex === 3) trackIndex = 0;
  if (clickedIndex === 4) trackIndex = 1;
  if (clickedIndex === 5) trackIndex = 2;

  if (clickedIndex < 0) {
    trackIndex = 2;
    artistIndex = 1;
    clickedIndex = 5;
  }

  if (clickedIndex < 3) trackIndex = clickedIndex;

  if (clickedIndex > 2) artistIndex = 1;
  if (clickedIndex < 3) artistIndex = 0;

  music = new Audio(albums[artistIndex].tracks[trackIndex].url);

  music.play();
  playing = true;

  player.removeChild(player.firstElementChild!);
  player.appendChild(pauseSVG);

  tracks[clickedIndex].classList.add(classClicked);
});
