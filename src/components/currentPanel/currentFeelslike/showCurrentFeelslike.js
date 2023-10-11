import createHtmlElement from '../../../services/createHtmlElement.js';

export default function (parent, data) {
  createHtmlElement(parent, 'div', ['currentFeelContainer', 'flex', 'column']);
  const currentFeelContainer = document.querySelector('.currentFeelContainer');
  createHtmlElement(currentFeelContainer, 'p', [], 'Current feels like::');
  const currentFeel = `${data.feelslike_c} °C / ${data.feelslike_f} °F`;
  createHtmlElement(currentFeelContainer, 'p', [], currentFeel);
}
