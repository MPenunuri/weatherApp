import showLocationData from './showLocationData.js';

export default function () {
  const buttons = document.querySelectorAll('.getCurrentDataBtn');
  buttons.forEach((btn) => {
    const url = btn.parentNode.id;
    btn.addEventListener('click', () => {
      showLocationData(url);
    });
  });
}
