import getData from '../services/getData.js';
import getTodayDate from '../services/getTodayDate.js';

export default async function (query) {
  const days = [];
  for (let i = 2; i > 0; i--) {
    const formatDate = getTodayDate(i);
    const data = await getData('history', query, [`dt=${formatDate}`]);
    const obj = data.forecast.forecastday[0];
    days.push(obj);
  }
  return days;
}
