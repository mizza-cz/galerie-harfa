jQuery(document).ready(function ($) {
  // var $container = $('.grid');
  // // initialize
  // $container.masonry({
  //   itemSelector: '.grid-item',
  //   gutter: 15,
  //   columnWidth: '.grid-sizer',
  // });

  $('.group__form-filter').on('click', function () {
    $(this).toggleClass('group__form-filter--closed');
    $(this).next().slideToggle();
  });
  $('.shops__item  .btn-arrow').click(function () {
    $(this).parents('.shops__item').addClass('actives');
  });

  $('.shops__item  .shop-close').click(function () {
    $(this).parents('.shops__item').removeClass('actives');
  });
  $('.best__item-content .best__btn .btn-arrow').click(function () {
    $(this).parents('.best__item-content').addClass('active');
  });

  $('.btn-footer').click(function () {
    $(this).parents('.footer__wrap').toggleClass('active');
  });

  $('.more').click(function () {
    $(this).parents('.shop-detail__box').addClass('vision');
  });

  $('.best__item-content .best__btn .shop-close').click(function () {
    $(this).parents('.best__item-content').removeClass('active');
  });
  //youtube script
  var tag = document.createElement('script');
  tag.src = '//www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
      // videoId: 'G__13eEzADk', // youtube video id
      playerVars: {
        autoplay: 0,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  };

  var p = document.getElementById('player');
  $(p).hide();

  // var t = document.getElementById('thumbnail');
  // t.src = 'images/content/bg-3.jpg';

  onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
      $('.start-video').fadeIn('normal');
    }
  };

  $(document).on('click', '.start-video', function () {
    $(this).hide();
    $('#player').show();
    $('#thumbnail_container, .terasy-page .top-main__content').hide();
    player.playVideo();
  });

  $('.grid').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
  $('.shops__btn').on('click', function () {
    $(this).closest('shops__item').removeClass('active');
    $(this).parent().addClass('active');

    return false;
  });
});

//// scroll
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// navbar
const menuIcon = document.querySelector('.navbar__btn');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

// filter checkboxes
document
  .querySelectorAll('.filter__form input[type=checkbox]')
  .forEach((input) => input.addEventListener('change', () => input.form.submit()));
