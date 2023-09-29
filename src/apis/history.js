import getData from '../services/getData.js';

export default async function (query, date) {
  const data = await getData('history', query, [`dt=${date}`]);
  return data;
}
