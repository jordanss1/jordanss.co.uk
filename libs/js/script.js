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

let index = 0;

function updateSlider(sliderTrack) {
  const imgWidth = sliderTrack.width() + 64;
  sliderTrack.css('transform', `translateX(${-index * imgWidth}px)`);
}

$('.map-switch-1').on('click', function () {
  $(this).closest('.group').attr('aria-disabled', 'true');
  $(this).closest('.controller-div').attr('aria-expanded', 'false');
  $('#map-overview').attr('aria-expanded', 'false');

  index = 0;

  $('.slider-track').each(function () {
    const sliderTrack = $(this);

    sliderTrack.css('transform', `translateX(0px)`);
  });
});

$('.map-switch-2').on('click', function () {
  $(this).closest('.group').attr('aria-disabled', 'false');
  $(this).closest('.controller-div').attr('aria-expanded', 'true');
  $('#map-overview').attr('aria-expanded', 'true');

  index = 0;

  $('.slider-track').each(function () {
    const sliderTrack = $(this);

    sliderTrack.css('transform', `translateX(0px)`);
  });
});

$('#overview-switch').on('click', function () {
  const isOverviewExpanded =
    $('#map-overview').attr('aria-expanded') === 'true';

  $('#map-overview').attr(
    'aria-expanded',
    isOverviewExpanded ? 'false' : 'true'
  );

  $('.map-switch-1')
    .closest('.group')
    .attr('aria-disabled', isOverviewExpanded ? 'true' : 'false');

  $('.map-switch-1')
    .closest('.controller-div')
    .attr('aria-expanded', isOverviewExpanded ? 'false' : 'true');

  index = 0;

  $('.slider-track').each(function () {
    $(this).css('transform', `translateX(0px)`);
  });
});

$('.exit-overview').on('click', function () {
  $(this).closest('.fixed').attr('aria-disabled', 'true');
  $('body').css('overflow', 'auto');

  $('.slider-track').each(function () {
    $(this).css('transform', `translateX(0px)`);
  });
});

$('#map-overview-button').on('click', function () {
  $('#map-overview').attr('aria-disabled', 'false');
  $('body').css('overflow', 'hidden');
});

$('#taskx-overview-button').on('click', function () {
  $('#taskx-overview').attr('aria-disabled', 'false');
  $('body').css('overflow', 'hidden');
});

$('#whatsong-overview-button').on('click', function () {
  $('#whatsong-overview').attr('aria-disabled', 'false');
  $('body').css('overflow', 'hidden');
});

$('#hackernews-overview-button').on('click', function () {
  $('#hackernews-overview').attr('aria-disabled', 'false');
  $('body').css('overflow', 'hidden');
});

$('.next-photo').on('click', function () {
  let sliderTrack = $(this)
    .closest('.slider-container')
    .find('.slider-track:visible');
  const visibleImages = sliderTrack.find('img:visible');

  if (index < visibleImages.length - 1) {
    index++;
    updateSlider(sliderTrack);
  }
});

$('.prev-photo').on('click', function () {
  let sliderTrack = $(this).closest('.slider-container').find('.slider-track');

  if (index > 0) {
    index--;
    updateSlider(sliderTrack);
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

$('contact-button').on('click', function () {
  $.ajax({
    url: '/api/mailer',
    method: 'POST',
    dataType: 'json',
  });
});
