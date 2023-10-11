import createHtmlElement from '../../../services/createHtmlElement.js';
import closeDetailsPanel from './closeDetailsPanel.js';
import icon from '../../../../assets/close-circle.svg';

export default function () {
  const container = document.querySelector('.details');
  createHtmlElement(container, 'button', ['closeDetailsBtn']);
  const btn = document.querySelector('.closeDetailsBtn');
  createHtmlElement(btn, 'img', ['closeDetailsIcon']);
  const img = document.querySelector('.closeDetailsIcon');
  img.setAttribute('src', icon);
  btn.addEventListener('click', () => {
    closeDetailsPanel();
  });
}
