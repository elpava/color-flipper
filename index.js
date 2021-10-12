'use strict';

const bodyEl = document.querySelector('body');
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
const hexColor = [];
let generateColor;

btn.addEventListener('click', e => {
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * validBinaryChar.length);
    hexColor.push(validBinaryChar[random]);
  }
  let generateColor = `#${hexColor.join('')}`;

  spanEl.textContent = generateColor;
  bodyEl.style.backgroundColor = generateColor;

  hexColor.length = 0;
});
