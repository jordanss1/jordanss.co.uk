/// <reference path="./jquery.js" />

$(function () {
  let $preloader = $('#preloader');
  if ($preloader.length) {
    $preloader.delay(1000).fadeOut('slow', () => $preloader.remove());
  }
});

const updateOccupation = () => {
  let occupations = [
    'Javascript Developer',
    'PHP Developer',
    'Frontend Developer',
  ];

  let index = 0;

  setInterval(() => {
    index = index === occupations.length - 1 ? 0 : index + 1;

    $('#occupation').text(occupations[index]);
  }, 4000);
};

updateOccupation();

$('#nav-toggle').on('change', function () {
  if ($(this).prop('checked')) {
    $('#nav').attr('aria-expanded', 'true');
  } else {
    $('#nav').attr('aria-expanded', 'false');
  }
});

let angle = 122;

const animateSkillSquare = () => {
  angle -= 1;

  $('.skills-square').css('--conic-deg', `${angle}deg`);

  requestAnimationFrame(animateSkillSquare);
};

animateSkillSquare();
