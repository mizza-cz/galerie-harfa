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
    $(this).parents('.shop-detail__box').toggleClass('vision');
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

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
// $( "#footer-btn" ).click(function() {
//   $('html, body').animate({
//       scrollTop: $('#footer').offset().top - 60
//   }, 1000);
//   });
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".btn-footer").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});