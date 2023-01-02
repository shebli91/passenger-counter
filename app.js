'use strict';

let conutEl = document.querySelector('#count');
let saveEl = document.querySelector('#save-el');

let count = 0;

function increment() {
  count++;
  conutEl.textContent = count;
}

function save() {
  let countStr = ` ${count} - `;
  saveEl.textContent += countStr;
  count = 0;
  conutEl.textContent = 0;
}

function reset() {
  saveEl.textContent = 'Previous Entries :';
}
