import $ from 'jquery';

import './style.scss';

const $circle = $('#colorChange .circle');

$circle.on('mouseenter', () => {
  $circle.addClass('change');
}).on('mouseout', () => {
  $circle.removeClass('change');
});

