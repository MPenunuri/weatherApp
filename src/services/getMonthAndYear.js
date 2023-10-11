export default function (data) {
  const date = new Date(data);
  const options = { month: 'long', timeZone: 'UTC' };
  const month = date.toLocaleString('en-US', options);
  return `${month}, ${date.getFullYear()}`;
}
