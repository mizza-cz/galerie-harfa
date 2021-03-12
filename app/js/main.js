jQuery(document).ready(function ($) {
  $('.shops__item  .btn-arrow').click(function () {
    $(this).parents('.shops__item').addClass('actives'); //добавляем класс текущей (нажатой)
  });

  $('.shops__item  .shop-close').click(function () {
    $(this).parents('.shops__item').removeClass('actives'); //добавляем класс текущей (нажатой)
  });
  $('.best__item-content .best__btn .btn-arrow').click(function () {
    $(this).parents('.best__item-content').addClass('active'); //добавляем класс текущей (нажатой)
  });

  $('.best__item-content .best__btn .shop-close').click(function () {
    $(this).parents('.best__item-content').removeClass('active'); //добавляем класс текущей (нажатой)
  });

  $('.gallery__inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
  const btnMore = document.querySelector('.more');
  const shopDetailBox = document.querySelector('.shop-detail__box');
  btnMore.addEventListener('click', () => {
    shopDetailBox.classList.toggle('vision');
  });
});
var video = document.querySelector('.video');
var btnVideo = document.getElementById('play');
var topInner = document.querySelector('.top__inner');
function togglePlayPause() {
  if (video.paused) {
    btnVideo.className = 'pause';
    video.play();
  } else {
    btnVideo.className = 'play';
    video.pause();
  }
}
btnVideo.onclick = function () {
  togglePlayPause();
};
$('.btn__video').on('click', function () {
  $(this).closest('top__inner').removeClass('top-play');
  $(this).parent().addClass('top-play');
});

window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const menuIcon = document.querySelector('.navbar__btn');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

$('.shops__btn').on('click', function () {
  $(this).closest('shops__item').removeClass('active');
  $(this).parent().addClass('active');

  return false;
});
