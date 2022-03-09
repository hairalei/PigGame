'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scoreP1Txt = document.querySelector('#score--0');
const scoreP2Txt = document.querySelector('#score--1');
const currScoreP1Txt = document.querySelector('#current--0');
const currScoreP2Txt = document.querySelector('#current--1');
const diceImg = document.querySelector('.dice');

let dice = 0;
let scoreP1 = 0;
let scoreP2 = 0;
let currScoreP1 = 0;
let currScoreP2 = 0;
let currPlayer = 1;

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `images/dice-${dice}.png`;
  return dice;
}

function countScore() {
  currScoreP1 += dice;
  console.log(currScoreP1);
  currScoreP1Txt.textContent = currScoreP1;
}

function holdScore() {
  scoreP1 += currScoreP1;
  scoreP1Txt.textContent = scoreP1;
  currScoreP1 = 0;
  currScoreP1Txt.textContent = currScoreP1;
}

btnRollDice.addEventListener('click', () => {
  rollDice();
  countScore();
});

btnHold.addEventListener('click', holdScore);

function changePlayer(player) {
  currPlayer === 1 ? (currPlayer = 1) : (currPlayer = 2);
}
