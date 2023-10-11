export default function (data) {
  const date = new Date(data);
  let hour = date.getHours();
  if (hour < 10) hour = '0' + hour;
  return hour + ':00';
}
