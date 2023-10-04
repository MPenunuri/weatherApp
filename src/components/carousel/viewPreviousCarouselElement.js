import getCarouselElements from './getCarouselElements.js';
import setNextElements from './setNextElements.js';
import setPreviousElements from './setPreviousElements.js';

export default function () {
  const elements = getCarouselElements();
  if (elements.previous !== undefined) {
    elements.previous.style.zIndex = elements.numOfElements;
    elements.current.style.zIndex = elements.numOfElements - 1;
    setPreviousElements(elements, elements.previousPosition);
    if (elements.next !== undefined) {
      setNextElements(elements, elements.previousPosition);
    }
  }
}
