// import createHtmlElement from '../../services/createHtmlElement.js';
import showBanner from './showBanner.js';
import showCarousel from '../carousel/showCarousel.js';
import showSingleResult from './showSingleResult.js';

export default function (arrayOfLocations) {
  const numOfLocations = arrayOfLocations.length;
  showBanner(`${numOfLocations} locations finded:`);
  const content = document.getElementById('content');
  showCarousel(content, arrayOfLocations, showSingleResult, 'url');
}
