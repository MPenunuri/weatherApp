export default function (data) {
  const date = new Date(data);
  const dayNum = date.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return `${days[dayNum]} ${date.getDate()}`;
}
