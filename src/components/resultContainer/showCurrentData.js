// import createHtmlElement from '../../services/createHtmlElement.js';
import showLocationPanel from '../locationPanel/showLocationPanel.js';
import showCurrentWeather from '../currentPanel/showCurrentWeather.js';

export default function (data) {
  const content = document.getElementById('content');
  showLocationPanel(content, data.location);
  showCurrentWeather(content, data.current);
}
