// Sliders
const swiper = new Swiper('.swiper', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  mobileSettings: {
    controls: true, 
    showCloseIcon: true 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper1-next',
    prevEl: '.swiper1-prev',
  },
});