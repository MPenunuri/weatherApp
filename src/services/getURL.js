export default function (API, query, arrayOfParams) {
  const key = 'e8b1fa371cb14ca98bc221748232709';
  const baseURL = 'http://api.weatherapi.com/v1/';
  let params;
  arrayOfParams.length !== 0
    ? (params = arrayOfParams.join('&'))
    : (params = '');

  const URL = `${baseURL}${API}.json?key=${key}&q=${query}&${params}`;
  return URL;
}
