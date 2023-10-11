import getNextVariable from './tableControlers/getNextVariable.js';
import getPrevVariable from './tableControlers/getPrevVariable.js';

export default function () {
  const btnPrev = document.querySelector('#tablePrev');
  btnPrev.addEventListener('click', () => getPrevVariable());
  const btnNext = document.querySelector('#tableNext');
  btnNext.addEventListener('click', () => getNextVariable());
}
