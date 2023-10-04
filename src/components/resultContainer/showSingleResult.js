import createHtmlElement from '../../services/createHtmlElement.js';

export default function (obj) {
  const container = document.getElementById(obj.url);
  createHtmlElement(container, 'p', [], obj.name);
  createHtmlElement(container, 'p', [], obj.region);
  createHtmlElement(container, 'p', [], obj.country);
  createHtmlElement(container, 'button', [], 'See weather');
}
