'use strict';

const spanEl = document.querySelector('.container span');
const btn = document.querySelector('main button');

const validBinaryChar = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

btn.addEventListener('click', e => {
  let generateColor = '#';

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * validBinaryChar.length);
    generateColor += validBinaryChar[random];
  }

  spanEl.textContent = generateColor;
  document.body.style.backgroundColor = generateColor;
});
