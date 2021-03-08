window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const menuIcon = document.querySelector('.navbar__btn');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

const btnMore = document.querySelector('.more');
const shopDetailBox = document.querySelector('.shop-detail__box');
btnMore.addEventListener('click', () => {
  shopDetailBox.classList.toggle('vision');
});

// const btnShop = document.querySelector('.shops__btn');
// const shopItem = document.querySelector('.shops__item');
// btnShop.addEventListener('click', () => {
//   shopItem.classList.toggle('active');
// });

// $('.shops__btn').on('click', function () {
//   $(this).closest('shops__item').removeClass('active');
//   $(this).parent().addClass('active');

//   return false;
// });
$('.best__btn').on('click', function () {
  $(this).closest('best__item-content').removeClass('active');
  $(this).parent().addClass('active');

  return false;
});
jQuery(document).ready(function ($) {
  $('.gallery__inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
});
