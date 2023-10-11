export default function () {
  const tds = document.querySelectorAll('td');
  const thead = document.querySelector('thead');
  const ths = thead.querySelectorAll('th');
  tds.forEach((td) => {
    const siblings = td.parentElement.children;
    siblings[1].classList.add('active');
  });
  ths[1].classList.add('active');
}
