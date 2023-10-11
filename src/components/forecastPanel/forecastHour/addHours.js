import createHtmlElement from '../../../services/createHtmlElement.js';
import getHour from './getHour.js';
import addVariables from './addVariables.js';
import setFirstVariable from './setFirstVariable.js';

export default function (data) {
  const hours = data.hour;
  const tbody = document.querySelector('tbody');
  for (let i = 0; i < hours.length; i++) {
    const time = hours[i].time;
    const hour = getHour(time);
    createHtmlElement(tbody, 'tr', [], '', hour);
    const tr = document.getElementById(hour);
    const col1 = [{ attribute: 'headers', value: 'col1' }];
    createHtmlElement(tr, 'th', [], hour, `${i + 1}row`, col1);
    addVariables(tr, hours[i]);
  }
  setFirstVariable();
}
