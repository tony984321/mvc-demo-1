import $ from 'jquery';

import './style.css';

const $circle = $('#animation .circle');

$circle.on('click', () => {
  $circle.toggleClass('transform')
});

