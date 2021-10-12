'use strict';

const spanEl = document.querySelector('.container span');
const btn = document.querySelector('main button');

const colors = ['red', 'rgb(11, 55, 48)', '#a2456f'];

btn.addEventListener('click', e => {
  const random = Math.floor(Math.random() * colors.length);

  spanEl.textContent = colors[random];
  document.body.style.backgroundColor = colors[random];
});
