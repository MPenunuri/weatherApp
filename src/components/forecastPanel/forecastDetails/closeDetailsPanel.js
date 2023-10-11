export default function () {
  const detailsPanel = document.querySelector('.detailsContainer');
  detailsPanel.remove();
  const body = document.querySelector('body');
  body.style.overflow = 'scroll';
}
