var mySwiper = new Swiper('.swiper-container', {
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
