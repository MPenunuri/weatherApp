const key = 'e8b1fa371cb14ca98bc221748232709';

async function getData(param) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/history.json?key=${key}&q=${param}&dt=2023-01-01&end_dt=2023-02-01`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData('London');
