// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameItemsElements = document.getElementById('game-items');
const resultElement = document.getElementById('result');
const pointsUserElement = document.getElementById('points-user');
const pointsPcElement = document.getElementById('points-pc');
const gameOptions = ['rock', 'paper', 'scissors'];
const gameRules = {
  rock: {
    paper: false,
    scissors: true
  },
  paper: {
    rock: true,
    scissors: false
  },
  scissors: {
    rock: false,
    paper: true
  }
};

let pcSelection = 0;
let userSelection = 0;
let pcPoints = 0;
let userPoints = 0;

const updateScore = () => {
  pointsUserElement.textContent = userPoints;
  pointsPcElement.textContent = pcPoints;
  console.log(userPoints, pcPoints);
};

const checkWinner = () => {
  if (pcSelection === userSelection) {
    return;
  }

  if (gameRules[userSelection][pcSelection]) {
    userPoints++;
  } else {
    pcPoints++;
  }

  updateScore();
};

const generateRandomPlay = () => {
  const randomPosition = Math.floor(Math.random() * gameOptions.length);
  pcSelection = gameOptions[randomPosition];
  checkWinner();
  console.log(`user selection = ${pcSelection}`);
};

const setUserSelection = selection => {
  userSelection = selection;
  generateRandomPlay();
  console.log(`user selection = ${userSelection}`);
};

gameItemsElements.addEventListener('click', event => {
  if (!event.target.classList.contains('game-item')) return;
  setUserSelection(event.target.dataset.item);
});
