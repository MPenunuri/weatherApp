export default function (elements, position) {
  for (
    let i = elements.numOfElements - 1, j = 1;
    i > position && j < elements.numOfElements;
    i--, j++
  ) {
    elements.array[i].setAttribute('style', `z-index: ${j}`);
  }
}
