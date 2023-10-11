import freezeBackground from './freezeBackground.js';
import showDetails from './showDetails.js';

export default function (data, date) {
  data.forEach((element) => {
    if (element.date === date) {
      freezeBackground();
      showDetails(element);
    }
  });
}
