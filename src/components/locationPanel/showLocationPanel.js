import createHtmlElement from '../../services/createHtmlElement.js';
import getDay from '../../services/getDay.js';
import getMonthAndYear from '../../services/getMonthAndYear.js';
import clock from '../clock/showTime.js';

export default function (parent, data) {
  createHtmlElement(parent, 'section', ['locationPanel', 'flex', 'column']);
  const container = document.querySelector('.locationPanel');
  createHtmlElement(container, 'h2', [], data.name);
  createHtmlElement(container, 'h3', [], `${data.region}, ${data.country}`);
  const date = new Date();
  const dateOnStr = getDay(date) + ', ' + getMonthAndYear(date);
  createHtmlElement(container, 'p', ['locationDate'], dateOnStr);
  createHtmlElement(container, 'div', ['clock']);
  const clockContainer = document.querySelector('.clock');
  setInterval(() => clock(clockContainer, data.tz_id), 1000);
}
