/// <reference path="./jquery.js" />

$(function () {
  let $preloader = $('#preloader');
  if ($preloader.length) {
    $preloader.delay(1000).fadeOut('slow', () => $preloader.remove());
  }
});
