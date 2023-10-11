import getCurrentData from '../../apis/current.js';
import getForecastData from '../../apis/forecast.js';
import getHistoryData from '../../apis/history.js';
import showCurrentData from './showCurrentData.js';
import showForecastData from './showForecastData.js';
import clearContainer from './clearContainer.js';

export default async function (location) {
  try {
    clearContainer();
    const currentData = await getCurrentData(location);
    showCurrentData(currentData);
    const forecastData = await getForecastData(location, 3);
    const historyData = await getHistoryData(location);
    const data = historyData.concat(forecastData.forecast.forecastday);
    showForecastData(data);
  } catch (error) {
    console.log(error);
  }
}
