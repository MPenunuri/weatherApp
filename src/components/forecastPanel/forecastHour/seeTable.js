import createHtmlElement from '../../../services/createHtmlElement.js';
import addControlers from './addControlers.js';
import addHeaders from './addHeaders.js';
import addHours from './addHours.js';
import icon from '../../../../assets/close-circle.svg';
import addListeners from './addListeners.js';

export default function (data) {
  const content = document.getElementById('content');
  const containerClasses = ['flex', 'tableContainer'];
  createHtmlElement(content, 'section', containerClasses);
  const tableContainer = document.querySelector('.tableContainer');
  createHtmlElement(tableContainer, 'div', ['centralContainer']);
  const centralContainer = document.querySelector('.centralContainer');
  addControlers(centralContainer);
  createHtmlElement(centralContainer, 'button', ['tableBtn']);
  const tableBtn = document.querySelector('.tableBtn');
  const iconSrc = [{ attribute: 'src', value: icon }];
  createHtmlElement(tableBtn, 'img', [], '', undefined, iconSrc);
  tableBtn.addEventListener('click', () => tableContainer.remove());
  const tableClasses = ['flex', 'column'];
  createHtmlElement(centralContainer, 'table', tableClasses);
  const table = document.querySelector('table');
  createHtmlElement(table, 'thead');
  createHtmlElement(table, 'tbody');
  addHeaders();
  addHours(data);
  addListeners();
}
