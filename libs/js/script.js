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

$('.switch-1').on('click', function () {
  $(this).closest('.group').attr('aria-disabled', 'true');
  $(this).closest('.controller-div').attr('aria-expanded', 'false');
});

$('.switch-2').on('click', function () {
  $(this).closest('.group').attr('aria-disabled', 'false');
  $(this).closest('.controller-div').attr('aria-expanded', 'true');
});

let index = 0;
const imgWidth = $('.slider-track').width() + 28;
const totalImages = $('.slider-track img').length;

function updateSlider() {
  $('.slider-track').css('transform', `translateX(${-index * imgWidth}px)`);
}

$('.next-photo').on('click', function () {
  if (index < totalImages - 1) {
    index++;
    updateSlider();
  }
});

$('.prev-photo').on('click', function () {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

$('.prev-photo').on('mouseenter', function () {
  $(this).closest('div').css('--left-grad', 'rgba(65,65,65,.5)');
});
$('.prev-photo').on('mouseleave', function () {
  $(this).closest('div').css('--left-grad', 'rgba(0,0,0,.5)');
});

$('.next-photo').on('mouseenter', function () {
  $(this).closest('div').css('--right-grad', 'rgba(65,65,65,.5)');
});

$('.next-photo').on('mouseleave', function () {
  $(this).closest('div').css('--right-grad', 'rgba(0,0,0,.5)');
});
