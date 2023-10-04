import createHtmlElement from '../../services/createHtmlElement.js';

export default function (text) {
  const content = document.getElementById('content');
  createHtmlElement(content, 'p', [], text, 'searchBanner');
}
