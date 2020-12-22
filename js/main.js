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
var mySwiperFeedBack = new Swiper('.feedback-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 7000,
  },

})

// const reviewsContainer = document.querySelector('.feedback-slider')
// reviewsContainer.addEventListener('mouseover', () => mySwiper.autoplay.stop())
// reviewsContainer.addEventListener('mouseout', () => mySwiper.autoplay.start())



// Слайдер с историями
var mySwiperStories = new Swiper('.stories-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.stories-left__nav--next',
    prevEl: '.stories-left__nav--prev',
  },
})


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


// Кнопка для скрола вверх
const scrollUpButton = document.querySelector('.to-top')
const offset = 300
const getTop = () => window.pageYOffset || document.documentElement.scrollTop

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUpButton.classList.add('to-top--active')
  } else {
    scrollUpButton.classList.remove('to-top--active')
  }
})

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

