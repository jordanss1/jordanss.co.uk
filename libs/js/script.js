/// <reference path="./jquery.js" />

let conicAngle = 40;

const animatePortfolioDeg = (children) => {
  if (conicAngle >= 204) return;

  children.each(function () {
    $(this).css('--deg-portfolio', `${conicAngle}deg`);
  });

  if (conicAngle <= 120) {
    conicAngle += 5;
  } else if (conicAngle <= 180) {
    conicAngle += 1;
  } else if (conicAngle <= 204) {
    conicAngle += 5;
  }

  requestAnimationFrame(() => animatePortfolioDeg(children));
};

$(function () {
  let $preloader = $('#preloader');
  if ($preloader.length) {
    $preloader.delay(1000).fadeOut('slow', () => $preloader.remove());
  }

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && $(entry.target).hasClass('observed')) {
        $(entry.target).attr('aria-disabled', 'false');

        if ($(entry.target).hasClass('observed-portfolio')) {
          const children = $(entry.target).find('.conic-bg');

          animatePortfolioDeg(children);
        }
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.3,
  });

  $('.observed').each(function () {
    observer.observe(this);
  });
});

$('.nav-bt').on('click', function (e) {
  e.preventDefault();

  const targetSelector = `#${$(this).attr('href')}`;

  const targetElement = $(targetSelector)[0];

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
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

let angle = 0;
let targetAngles = [
  { class: 'js-skill', angle: 297 },
  { class: 'jquery-skill', angle: 310 },
  { class: 'ts-skill', angle: 330 },
  { class: 'react-skill', angle: 354 },
  { class: 'node-skill', angle: 10 },
  { class: 'php-skill', angle: 26 },
  { class: 'express-skill', angle: 278 },
  { class: 'redux-skill', angle: 45 },
  { class: 'tailwind-skill', angle: 255 },
  { class: 'bootstrap-skill', angle: 70 },
  { class: 'mysql-skill', angle: 225 },
  { class: 'mongo-skill', angle: 97 },
  { class: 'docker-skill', angle: 208 },
  { class: 'jest-skill', angle: 190 },
  { class: 'router-skill', angle: 172 },
  { class: 'git-skill', angle: 151 },
  { class: 'npm-skill', angle: 133 },
  { class: 'framer-skill', angle: 117 },
];
let hovered;
let targetAngle;

$('.skill').on('mouseenter', function () {
  let match = targetAngles.find((angle) => $(this).hasClass(angle.class));
  if (match) {
    hovered = true;
    targetAngle = match.angle;

    $('.skill').each(function () {
      if (!$(this).hasClass(match.class)) {
        $(this).attr('aria-disabled', 'true');
      }
    });
  }
});

$('.skill').on('mouseleave', function () {
  isHovering = false;
  targetAngle = null;
  $('.skills-square').css('--spotlight-color', `#19879cb3`);
  $('.skills-square').css('--coverage-one', `7%`);
  $('.skills-square').css('--coverage-two', `15%`);

  $('.skill').each(function () {
    $(this).attr('aria-disabled', 'false');
  });
});

const animateSkillSquare = () => {
  if (angle >= 360) angle -= 360;

  if (hovered && targetAngle !== null) {
    if (angle !== targetAngle) {
      $('.skills-square').css('--spotlight-color', `  #e1faff94`);
      $('.skills-square').css('--coverage-one', `5%`);
      $('.skills-square').css('--coverage-two', `10%`);

      const diff = (targetAngle - angle + 360) % 360;
      angle = targetAngle;
    }
  } else {
    angle += 1;
  }

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

let contactSending = false;
let errorTimer;

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

$('#contact-button').on('click', async function (e) {
  e.preventDefault();

  if (contactSending) return;

  contactSending = true;
  clearTimeout(errorTimer);

  $('#contact-button').attr('aria-disabled', 'false');
  $('#contact-button').attr('aria-busy', 'true');
  $('#contact-error').attr('aria-disabled', 'true');
  $('#email-error').closest('div').attr('aria-disabled', 'true');
  $('#message-error').closest('div').attr('aria-disabled', 'true');
  $('#general-error').closest('div').attr('aria-disabled', 'true');

  $('#email-error').text('');
  $('#message-error').text('');
  $('#general-error').text('');

  const email = $('#email-input').val().trim();
  const message = $('#message-input').val().trim();

  if (!isValidEmail(email) && email.length) {
    $('#email-error').text('Not valid email');
    $('#email-error').closest('div').attr('aria-disabled', 'false');
  }

  if (!email.length) {
    $('#email-error').text('Email field is empty');
    $('#email-error').closest('div').attr('aria-disabled', 'false');
  }

  if (!message.length) {
    $('#message-error').text('Message field is empty');
    $('#message-error').closest('div').attr('aria-disabled', 'false');
  }

  if (!isValidEmail(email) || !email.length || !message.length) {
    $('#contact-error').attr('aria-disabled', 'false');

    errorTimer = setTimeout(
      () => $('#contact-error').attr('aria-disabled', 'true'),
      4000
    );

    $('#contact-button').attr('aria-busy', 'false');
    contactSending = false;
    return;
  }

  try {
    const { data } = await $.ajax({
      url: '/api/mailer',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',

      data: JSON.stringify({ email, message }),
    });

    $('#contact-button').attr('aria-busy', 'false');

    if (data === 'success') {
      $('#contact-button').attr('aria-disabled', 'true');
      $('#message-input').val('');

      setTimeout(
        () => $('#contact-button').attr('aria-disabled', 'false'),
        1500
      );
    }
  } catch (err) {
    $('#contact-button').attr('aria-busy', 'false');

    errorTimer = setTimeout(
      () => $('#contact-error').attr('aria-disabled', 'true'),
      4000
    );

    const error = err.responseJSON
      ? err.responseJSON.error
      : 'Server error please try again';

    $('#contact-error').attr('aria-disabled', 'false');
    $('#general-error').text(error);
    $('#general-error').closest('div').attr('aria-disabled', 'false');
  } finally {
    contactSending = false;
  }
});
