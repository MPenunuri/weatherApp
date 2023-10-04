import createHtmlElement from '../../services/createHtmlElement.js';
import addCarouselElements from './addCarouselElements.js';
import addCarouselControlers from './addCarouselControlers.js';
import setFirstCarouselElement from './setFirstCarouselElement.js';
import addEventListeners from './addEventListeners.js';

export default function (
  parent,
  arrayOfObjects,
  objectHandlerFn,
  attributeAsId
) {
  createHtmlElement(parent, 'section', ['carousel'], '');
  addCarouselElements(arrayOfObjects, objectHandlerFn, attributeAsId);
  addCarouselControlers(parent);
  setFirstCarouselElement(0);
  addEventListeners();
}
