import createHtmlElement from '../../../services/createHtmlElement.js';
import arrowBack from '../../../../assets/arrow-back.svg';
import arrowForward from '../../../../assets/arrow-forward.svg';

export default function (parent) {
  createHtmlElement(parent, 'section', ['flex', 'tableControlers']);
  const controlersContainer = document.querySelector('.tableControlers');
  const types = ['Prev', 'Next'];
  types.forEach((type) => {
    createHtmlElement(
      controlersContainer,
      'button',
      ['tableControler'],
      '',
      `table${type}`
    );
  });
  const prevControler = document.getElementById('tablePrev');
  createHtmlElement(prevControler, 'img', [], '', 'prevIcon', [
    { attribute: 'src', value: arrowBack }
  ]);
  const nextControler = document.getElementById('tableNext');
  createHtmlElement(nextControler, 'img', [], '', 'nextIcon', [
    { attribute: 'src', value: arrowForward }
  ]);
}
