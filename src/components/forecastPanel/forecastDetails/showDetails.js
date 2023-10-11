import createHtmlElement from '../../../services/createHtmlElement.js';
import addCloseBtn from './addCloseBtn.js';
import strToCamelCase from '../../../services/strToCamelCase.js';
import variablesToShow from './variables.js';
import seeTable from '../forecastHour/seeTable.js';

export default function (data) {
  const detailsContainer = document.querySelector('.detailsContainer');
  createHtmlElement(detailsContainer, 'div', ['flex', 'column', 'details']);
  const details = document.querySelector('.details');
  addCloseBtn();
  const variables = variablesToShow(data);
  const divClasses = ['flex', 'column'];
  variables.forEach((variable) => {
    const variableName = strToCamelCase(variable.name);
    createHtmlElement(details, 'div', divClasses, '', `${variableName}Det`);
    const container = document.getElementById(`${variableName}Det`);
    createHtmlElement(container, 'p', [], `${variable.name}:`);
    createHtmlElement(container, 'p', [], variable.data);
  });
  const btnLeyend = 'See hourly forecast';
  const btnId = `${data.date}btn`;
  createHtmlElement(details, 'button', ['detailsBtn'], btnLeyend, btnId);
  const btn = document.getElementById(`${data.date}btn`);
  btn.addEventListener('click', () => seeTable(data));
}
