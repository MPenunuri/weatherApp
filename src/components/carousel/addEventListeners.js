import viewNextCarouselElement from './viewNextCarouselElement.js';
import viewPreviousCarouselElement from './viewPreviousCarouselElement.js';

export default function () {
  const nextBtn = document.getElementById('carouselNext');
  nextBtn.addEventListener('click', viewNextCarouselElement);
  const prevBtn = document.getElementById('carouselPrev');
  prevBtn.addEventListener('click', viewPreviousCarouselElement);
}
