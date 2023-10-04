import getCarouselElements from './getCarouselElements.js';
import setNextElements from './setNextElements.js';
import setPreviousElements from './setPreviousElements.js';

export default function () {
  const elements = getCarouselElements();
  if (elements.next !== undefined) {
    elements.next.style.zIndex = elements.numOfElements;
    elements.current.style.zIndex = elements.numOfElements - 1;
    setNextElements(elements, elements.nextPosition);
    if (elements.previous !== undefined) {
      setPreviousElements(elements, elements.currentPosition);
    }
  }
}
