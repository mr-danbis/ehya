const headerBurger = document.querySelector('.header__burger')
const headerClose = document.querySelector('.header__close')
const nav = document.querySelector('.header__right')
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav__link')
const menuOpen = () => {
  nav.classList.add('header__right--active')
  body.classList.add('overflow--hidden')
}
const menuClose = () => {
  nav.classList.remove('header__right--active')
  body.classList.remove('overflow--hidden')
}

// Навигация мобилок
navLinks.forEach(link => link.addEventListener('click', menuClose))
headerBurger.addEventListener('click', menuOpen)
headerClose.addEventListener('click', menuClose)


// Слайдер отзывов
var mySwiper = new Swiper('.feedback-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  
})

const reviewsContainer = document.querySelector('.swiper-container')
reviewsContainer.addEventListener('mouseover', () => mySwiper.autoplay.stop())
reviewsContainer.addEventListener('mouseout', () => mySwiper.autoplay.start())



// Слайдер с историями
if (document.querySelector('.stories-slider')) {
  const storiesSlider = new Swiper('.stories-slider', {
    spaceBetween: 24,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    navigation: {
      prevEl: '.stories-left__nav--prev',
      nextEl: '.stories-left__nav--next',
    },
    breakpoints: {
      577: {
        spaceBetween: 18,
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 1,
      },
    },
  })
}


// Модалка
const modalButtons = document.querySelectorAll('[data-target=modal]')
const modalOpen = () => {
  document.querySelector('.modal-overlay').classList.add('modal-overlay--active')
  document.querySelector('.modal__wrapper').classList.add('modal__wrapper--active')
  body.classList.add('overflow--hidden')
}
const modalClose = () => {
  document.querySelector('.modal-overlay').classList.remove('modal-overlay--active')
  document.querySelector('.modal__wrapper').classList.remove('modal__wrapper--active')
  if (!document.querySelector('.header__right').classList.contains('header__right--active'))
    body.classList.remove('overflow--hidden')
}

modalButtons.forEach(target => {
  target.addEventListener('click', modalOpen)
})

document.querySelector('.modal__close').addEventListener('click', modalClose)
document.querySelector('.modal-overlay').addEventListener('click', modalClose)

document.addEventListener('keyup', e => {
  if (e.code === 'Escape') modalClose()
})

// Пароль в модалке
const iconPw = document.querySelector('.modal-form__icon-pw')
const pwInput = document.querySelector('.modal-form__input--pw')
iconPw.addEventListener('click', () => {
  if (pwInput.type === 'text') {
    pwInput.type = 'password'
  } else {
    pwInput.type = 'text'
  }
  iconPw.classList.toggle('modal-form__icon-pw--visible')
})


// Табы
$(document).ready(function(){
  var tabsTrendsItem = $('.trends__item');
  var contentTrendsCard = $('.trends_content');

  tabsTrendsItem.on('click', function(event){
    var activeContent = $(this).attr('data-target');
    
    tabsTrendsItem.removeClass('trends__item--active');
    $(this).addClass('trends__item--active');
    
    contentTrendsCard.removeClass('trends_content--active');
    $(activeContent).addClass('trends_content--active');
  });
});