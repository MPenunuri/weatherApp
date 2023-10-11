import createHtmlElement from '../../../services/createHtmlElement.js';
import getHour from './getHour.js';
import getUrlIcon from '../../../services/getUrlIcon.js';

export default function (tr, obj) {
  const hour = getHour(obj.time);
  const condition = obj.condition;
  const id = `${hour}condition`;
  createHtmlElement(tr, 'td', ['hourContidion'], '', id);
  const td = document.getElementById(id);
  createHtmlElement(td, 'p', [], condition.text);
  createHtmlElement(td, 'img', [], '', `${id}Icon`);
  getUrlIcon(condition.icon, `${id}Icon`);
}
