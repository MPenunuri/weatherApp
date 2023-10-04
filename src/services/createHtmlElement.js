export default function (
  parent,
  type,
  arrayOfClasses,
  textContent,
  id,
  arrayOfAttributes
) {
  const element = document.createElement(type);
  if (arrayOfClasses !== undefined && arrayOfClasses.length !== 0) {
    arrayOfClasses.forEach((className) => {
      element.classList.add(className);
    });
  }
  if (textContent !== undefined) element.textContent = textContent;
  if (id !== undefined) element.id = id;
  if (arrayOfAttributes !== undefined && arrayOfAttributes.length !== 0) {
    arrayOfAttributes.forEach((obj) => {
      element.setAttribute(obj.attribute, obj.value);
    });
  }
  parent.appendChild(element);
}
