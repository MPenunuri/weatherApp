import getDay from '../../../services/getDay.js';
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
      name: 'Maximum temperature',
      data: `${day.maxtemp_c} °C / ${day.maxtemp_f} °F`
    },
    {
      name: 'Minimum temperature',
      data: `${day.mintemp_c} °C / ${day.mintemp_f} °F`
    },
    {
      name: 'Average temperature',
      data: `${day.avgtemp_c} °C / ${day.avgtemp_f} °F`
    },
    {
      name: 'Chance of rain',
      data: `${day.daily_chance_of_rain} %`
    },
    {
      name: 'Chance of snow',
      data: `${day.daily_chance_of_snow} %`
    }
  ];
  return variables;
}
