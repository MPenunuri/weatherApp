import getData from '../services/getData.js';

export default async function (query, days) {
  const data = await getData('forecast', query, [`days=${days}`]);
  return data;
}
