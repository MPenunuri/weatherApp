import createHtmlElement from '../../../services/createHtmlElement.js';

export default function () {
  const content = document.getElementById('content');
  createHtmlElement(content, 'section', ['flex', 'detailsContainer']);
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';
}
