import createHtmlElement from '../../../services/createHtmlElement.js';

export default function (parent, data) {
  createHtmlElement(parent, 'div', ['currentTempContainer', 'flex', 'column']);
  const currentTempContainer = document.querySelector('.currentTempContainer');
  createHtmlElement(currentTempContainer, 'p', [], 'Current temperature:');
  const currentTemp = `${data.temp_c} °C / ${data.temp_f} °F`;
  createHtmlElement(currentTempContainer, 'p', [], currentTemp);
}
