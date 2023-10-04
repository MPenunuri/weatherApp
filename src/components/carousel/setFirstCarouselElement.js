export default function (num) {
  const carousel = document.querySelector('.carousel');
  const carouselElements = carousel.children;
  const firstCarouselElement = carouselElements[num];
  firstCarouselElement.classList.add('active');
}
