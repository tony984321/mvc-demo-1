import $ from 'jquery';

import './style.css';

const $circle = $('#colorChange .circle');

$circle.on('mouseenter', () => {
  $circle.addClass('change');
}).on('mouseout', () => {
  $circle.removeClass('change');
});

