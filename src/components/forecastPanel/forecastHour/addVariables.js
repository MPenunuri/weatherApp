import createHtmlElement from '../../../services/createHtmlElement.js';
import addCondition from './addContition.js';
import otherVariablesToShow from './otherVariables.js';

export default function (tr, obj) {
  addCondition(tr, obj);
  const otherVariables = otherVariablesToShow(obj);
  for (let i = 0; i < otherVariables.length; i++) {
    const data = otherVariables[i].data;
    const at = [{ attribute: 'headers', value: `col${i + 2}` }];
    createHtmlElement(tr, 'td', [], data, undefined, at);
  }
}
