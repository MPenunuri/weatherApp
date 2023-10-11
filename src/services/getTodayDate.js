export default function (i) {
  const date = new Date();
  date.setDate(date.getDate() - i);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formatDate = `${year}-${month}-${day}`;
  return formatDate;
}
