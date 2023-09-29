import getData from '../services/getData.js';

export default async function (query) {
  const data = await getData('current', query, []);
  return data;
}
