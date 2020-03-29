import $ from 'jquery';

import './style.css';

const $tabBar = $('#tab .tab-bar');
const $content = $('#tab .content');

$tabBar.children().eq(0).addClass('selected').siblings().removeClass('selected');
$content.children().eq(0).addClass('active').siblings().removeClass('active');

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();

  $tabBar.children().eq(index).addClass('selected').siblings().removeClass('selected');
  $content.children().eq(index).addClass('active').siblings().removeClass('active');
});

