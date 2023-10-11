import showForecastPanel from '../forecastPanel/showForecastPanel.js';
import showBanner from './showBanner.js';

export default function (data) {
  const content = document.getElementById('content');
  showBanner('Forecast:');
  const banner = document.getElementById('searchBanner');
  banner.style.fontWeight = '700';
  showForecastPanel(content, data);
}
