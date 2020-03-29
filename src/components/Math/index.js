import $ from 'jquery';

import './style.css';

const $button_1 = $('#plus');
const $button_2 = $('#minus');
const $button_3 = $('#multiple');
const $button_4 = $('#divide');
const $output = $('#output');
const number = localStorage.getItem('n');
$output.text(number || 100);

$button_1.on('click', () => {
  let n = parseInt($output.text());
  n += 1;
  localStorage.setItem('number', n);
  $output.text(n)
});

$button_2.on('click', () => {
  let n = parseInt($output.text());
  n -= 1;
  localStorage.setItem('number', n);
  $output.text(n)
});

$button_3.on('click', () => {
  let n = parseInt($output.text());
  n *= 2;
  localStorage.setItem('number', n);
  $output.text(n)
});

$button_4.on('click', () => {
  let n = parseInt($output.text());
  n /= 2;
  localStorage.setItem('number', n);
  $output.text(n)
});

