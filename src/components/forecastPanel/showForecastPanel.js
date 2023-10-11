import showCarousel from '../carousel/showCarousel.js';
import showForecastDay from './forecastDay/showForecastDay.js';
import addDetailsBtns from './forecastDay/addDetailsBtns.js';
import orderCarouselElements from './orderCarouselElements.js';

export default function (parent, data) {
  const content = document.getElementById('content');
  showCarousel(content, [...data], showForecastDay, 'date');
  orderCarouselElements();
  addDetailsBtns(data);
}
