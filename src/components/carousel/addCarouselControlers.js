import createHtmlElement from '../../services/createHtmlElement.js';
import arrowBack from '../../../assets/arrow-back.svg';
import arrowForward from '../../../assets/arrow-forward.svg';

export default function (parent) {
  const content = document.getElementById('content');
  createHtmlElement(content, 'section', ['flex', 'carouselControlers']);
  const controlersContainer = document.querySelector('.carouselControlers');
  const types = ['Prev', 'Next'];
  types.forEach((type) => {
    createHtmlElement(
      controlersContainer,
      'button',
      ['carouselControler'],
      '',
      `carousel${type}`
    );
  });
  const prevControler = document.getElementById('carouselPrev');
  createHtmlElement(prevControler, 'img', [], '', 'prevIcon', [
    { attribute: 'src', value: arrowBack }
  ]);
  const nextControler = document.getElementById('carouselNext');
  createHtmlElement(nextControler, 'img', [], '', 'nextIcon', [
    { attribute: 'src', value: arrowForward }
  ]);
}
