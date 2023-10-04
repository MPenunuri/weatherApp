export default function (elements, position) {
  for (let i = 0; i < position; i++) {
    elements.array[i].setAttribute('style', `z-index: ${i + 1}`);
  }
}
