const clock = (htmlElement, tz) => {
  const options = {
    timeZone: tz,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const time = new Date().toLocaleTimeString('en-US', options);
  htmlElement.textContent = time;
};

export default clock;
