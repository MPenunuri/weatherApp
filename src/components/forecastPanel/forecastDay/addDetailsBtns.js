import createHtmlElement from '../../../services/createHtmlElement.js';
import showDayData from '../forecastDetails/showDayData.js';

export default function (data) {
  const containers = document.querySelectorAll('.carouselElement');
  containers.forEach((container) => {
    const id = `${container.id}DetailsBtn`;
    createHtmlElement(container, 'button', [], 'See details', id);
    const btn = document.getElementById(id);
    btn.addEventListener('click', () => {
      showDayData(data, container.id);
    });
  });
}
