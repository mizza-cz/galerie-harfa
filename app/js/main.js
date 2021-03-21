jQuery(document).ready(function ($) {
  $('.group__form-filter').on('click', function () {
    $(this).toggleClass('group__form-filter--closed');
    $(this).next().slideToggle();
  });
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
  //video terasy
  $('.btn__video').on('click', function () {
    $(this).closest('top__inner').removeClass('top-play');
    $(this).parent().addClass('top-play');
  });

  ////
  $('.gallery__inner').magnificPopup({
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

// video terasy page

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

/// text more
const btnMore = document.querySelector('.more');
const shopDetailBox = document.querySelector('.shop-detail__box');
btnMore.addEventListener('click', () => {
  shopDetailBox.classList.toggle('vision');
});
