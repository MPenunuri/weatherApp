export default function (obj) {
  const variables = [
    {
      name: 'Temperature',
      data: `${obj.temp_c} °C / ${obj.temp_f} °F`
    },
    {
      name: 'Feels like',
      data: `${obj.feelslike_c} °C / ${obj.feelslike_f} °F`
    },
    {
      name: 'Chance of rain',
      data: `${obj.chance_of_rain} %`
    },
    {
      name: 'Chance of snow',
      data: `${obj.chance_of_snow} %`
    }
  ];
  return variables;
}
