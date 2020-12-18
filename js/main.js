var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 7000,
  },
})

const reviewsContainer = document.querySelector('.feedback-container')
reviewsContainer.addEventListener('mouseover', () => mySwiper.autoplay.stop())
reviewsContainer.addEventListener('mouseout', () => mySwiper.autoplay.start())
