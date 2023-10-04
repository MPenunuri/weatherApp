export default function () {
  const content = document.getElementById('content');
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
}
