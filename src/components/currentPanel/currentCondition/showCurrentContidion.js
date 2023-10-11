import createHtmlElement from '../../../services/createHtmlElement.js';
import getUrlIcon from '../../../services/getUrlIcon.js';

export default function (parent, data) {
  createHtmlElement(parent, 'div', ['currentCondContainer', 'flex', 'column']);
  const currentCondContainer = document.querySelector('.currentCondContainer');
  createHtmlElement(currentCondContainer, 'p', [], 'Current condition:');
  createHtmlElement(
    currentCondContainer,
    'img',
    [],
    undefined,
    'currentConditionIcon'
  );
  createHtmlElement(currentCondContainer, 'p', [], data.condition.text);
  getUrlIcon(data.condition.icon, 'currentConditionIcon');
}
