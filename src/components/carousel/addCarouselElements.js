import createHtmlElement from '../../services/createHtmlElement.js';
import getZIndex from './getZIndex.js';

export default function (arrayOfObjects, objectHandlerFn, attributeAsId) {
  const carousel = document.querySelector('.carousel');
  arrayOfObjects.forEach((obj) => {
    createHtmlElement(
      carousel,
      'div',
      ['carouselElement', 'flex', 'column'],
      '',
      obj[attributeAsId],
      [
        {
          attribute: 'style',
          value: `z-index: ${getZIndex(arrayOfObjects, obj)};`
        }
      ]
    );
    objectHandlerFn(obj);
  });
}
