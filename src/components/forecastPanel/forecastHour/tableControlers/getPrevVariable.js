export default function () {
  const tds = document.querySelectorAll('td.active');
  tds.forEach((td) => {
    const siblings = [...td.parentElement.children];
    const index = siblings.indexOf(td);
    if (index > 1) {
      siblings[index - 1].classList.add('active');
      siblings[index].classList.remove('active');
    }
  });
  const thead = document.querySelector('thead');
  const headers = [...thead.children];
  const th = thead.querySelector('th.active');
  const index = headers.indexOf(th);
  if (index > 1) {
    headers[index - 1].classList.add('active');
    headers[index].classList.remove('active');
  }
}
