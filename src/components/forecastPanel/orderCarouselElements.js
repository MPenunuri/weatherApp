import getTodayDate from '../../services/getTodayDate.js';

export default function () {
  console.log('hola');
  const carousel = document.querySelector('.carousel');
  const elements = carousel.querySelectorAll('.carouselElement');
  const date = getTodayDate(0);
  let index;
  elements.forEach((element) => {
    if (element.id === date) index = [...elements].indexOf(element);
  });
  console.log(elements.length);
  console.log(elements);
  elements[index].style.zIndex = elements.length;
  for (let i = 0; i < index; i++) {
    elements[i].style.zIndex = i;
  }
  for (let j = elements.length - 1, i = 0; j > index; j--, i++) {
    elements[j].style.zIndex = i;
  }
}
