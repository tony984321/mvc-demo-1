import $ from 'jquery';

import './style.scss';

const $circle = $('#animation .circle');

$circle.on('click', () => {
  $circle.toggleClass('transform')
});

