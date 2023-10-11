import createHtmlElement from '../../../services/createHtmlElement.js';
import strToCamelCase from '../../../services/strToCamelCase.js';
import getDay from '../../../services/getUTCDay.js';
import getMonthAndYear from '../../../services/getMonthAndYear.js';

export default function (obj) {
  const day = obj.day;
  const dayName = getDay(obj.date);
  const dateOnStr = getMonthAndYear(obj.date);
  const variables = [
    { name: dayName, data: dateOnStr },
    {
      name: 'Condition',
      data: `${day.condition.text}`
    },
    {
      name: 'Average temperature',
      data: `${day.avgtemp_c} °C / ${day.avgtemp_f} °F`
    }
  ];
  const container = document.getElementById(obj.date);
  container.classList.add('forecastDay');
  variables.forEach((variable) => {
    const variableName = strToCamelCase(variable.name);
    const id = variableName + obj.date.toString();
    createHtmlElement(
      container,
      'div',
      ['flex', 'column', variableName],
      '',
      id
    );
    const div = document.getElementById(id);
    createHtmlElement(
      div,
      'p',
      [`${variableName}Header`],
      variable.name,
      undefined,
      [
        {
          attribute: 'style',
          value: 'font-size: .75rem'
        }
      ]
    );
    createHtmlElement(div, 'p', [], variable.data, undefined, [
      {
        attribute: 'style',
        value: 'font-size: .75rem'
      }
    ]);
  });
}
