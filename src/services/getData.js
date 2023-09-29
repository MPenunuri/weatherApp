import getURL from './getURL.js';
import getJSON from './getJSON.js';

export default async function (API, query, arrayOfParams) {
  const url = getURL(API, query, arrayOfParams);
  const data = await getJSON(url);
  return data;
}
