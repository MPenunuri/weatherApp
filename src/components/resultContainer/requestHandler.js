import showBanner from './showBanner.js';
import showSearchResults from './showSearchResults.js';
import clearContainer from './clearContainer.js';
import showLocationData from './showLocationData.js';

export default function (arrayOfLocations) {
  clearContainer();
  if (arrayOfLocations.length === 0) {
    showBanner(
      "We're sorry, we couldn't find any results for your search. Please review your query and try again."
    );
  } else if (arrayOfLocations.length === 1) {
    showLocationData(arrayOfLocations[0].url);
  } else {
    showSearchResults(arrayOfLocations);
  }
}
