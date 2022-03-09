'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scoreP1Txt = document.querySelector('#score--0');
const scoreP2Txt = document.querySelector('#score--1');
const currScoreP1Txt = document.querySelector('#current--0');
const currScoreP2Txt = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

let dice = 0;
let scoreP1 = 0;
let scoreP2 = 0;
let currScore = 0;
let currPlayer = 1;
let score = scoreP1;
let scoreLabel;
let currScoreLabel;

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `images/dice-${dice}.png`;

  if (dice === 1) {
    currScore = 0;
    currScoreLabel.textContent = currScore;
    switchPlayer();
    setPlayer();
  } else {
    currScore += dice;
    currScoreLabel.textContent = currScore;
  }
}

function holdScore() {
  score += currScore;
  scoreLabel.textContent = score;
  currScore = 0;
  console.log(`score: ${score}`);

  console.log(`currscore: ${currScore}`);
  currScoreLabel.textContent = currScore;

  switchPlayer();

  setPlayer();
}

btnRollDice.addEventListener('click', () => {
  rollDice();
  console.log(dice);
  console.log(`currscore: ${currScore}`);
});

btnHold.addEventListener('click', holdScore);

function switchPlayer() {
  if (currPlayer === 1) {
    currPlayer = 2;
    scoreP1 = score;
  } else {
    currPlayer = 1;
    scoreP2 = score;
  }
}

function setPlayer() {
  if (currPlayer === 1) {
    score = scoreP1;
    scoreLabel = scoreP1Txt;
    currScoreLabel = currScoreP1Txt;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  } else if (currPlayer === 2) {
    score = scoreP2;
    scoreLabel = scoreP2Txt;
    currScoreLabel = currScoreP2Txt;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  }
}

setPlayer();
