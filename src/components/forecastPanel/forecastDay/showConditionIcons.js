import getUrlIcon from '../../../services/getUrlIcon.js';

export default async function (url, id) {
  const container = document.getElementById(id);
  const header = container.querySelector('.conditionHeader');
  const icon = document.createElement('img');
  icon.setAttribute('id', `conditionIcon${id}`);
  icon.setAttribute('alt', 'conditionIcon');
  icon.classList.add('conditionIcon');
  container.insertBefore(icon, header.nextSibling);
  getUrlIcon(url, `conditionIcon${id}`);
}
