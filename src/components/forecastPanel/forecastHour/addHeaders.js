import createHtmlElement from '../../../services/createHtmlElement.js';
import arrayOfheaders from './headers.js';

export default function () {
  const head = document.querySelector('thead');
  const headers = arrayOfheaders;
  for (let i = 0; i < headers.length; i++) {
    createHtmlElement(head, 'th', [], headers[i], `col${i + 1}`);
  }
}
