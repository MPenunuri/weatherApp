export default async function (url, htmlElementId) {
  try {
    const response = await fetch(url);
    const htmlElement = document.getElementById(htmlElementId);
    htmlElement.setAttribute('src', response.url);
  } catch (error) {
    return error;
  }
}
