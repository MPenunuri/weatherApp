export default function (data) {
  const date = new Date(data);
  const dayNum = date.getUTCDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return `${days[dayNum]} ${date.getUTCDate()}`;
}
