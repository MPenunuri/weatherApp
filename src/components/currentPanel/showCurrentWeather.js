import createHtmlElement from '../../services/createHtmlElement.js';
import showCurrentContidion from './currentCondition/showCurrentContidion.js';
import showCurrentTemperature from './currentTemperature/showCurrentTemperature.js';
import showCurrentFeelslike from './currentFeelslike/showCurrentFeelslike.js';

export default function (parent, data) {
  createHtmlElement(parent, 'section', ['currentPanel', 'flex', 'column']);
  const currentPanel = document.querySelector('.currentPanel');
  showCurrentContidion(currentPanel, data);
  showCurrentTemperature(currentPanel, data);
  showCurrentFeelslike(currentPanel, data);
}
