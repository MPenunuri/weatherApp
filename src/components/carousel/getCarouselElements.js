export default function () {
  const carouselElements = document.querySelectorAll('.carouselElement');
  const numOfElements = [...carouselElements].length;
  let current;
  let previous;
  let next;
  carouselElements.forEach((element) => {
    const style = window.getComputedStyle(element);
    const zIndex = style.getPropertyValue('z-index');
    if (parseInt(zIndex) === numOfElements) current = element;
  });
  const currentPosition = [...carouselElements].indexOf(current);
  if (current !== carouselElements[0]) {
    previous = carouselElements[currentPosition - 1];
  }
  if (current !== carouselElements[numOfElements - 1]) {
    next = carouselElements[currentPosition + 1];
  }
  const previousPosition = [...carouselElements].indexOf(previous);
  const nextPosition = [...carouselElements].indexOf(next);
  return {
    array: carouselElements,
    numOfElements,
    current,
    currentPosition,
    previous,
    previousPosition,
    next,
    nextPosition
  };
}
