import getData from '../services/getData.js';

export default async function (query) {
  const data = await getData('search', query, []);
  return data;
}
