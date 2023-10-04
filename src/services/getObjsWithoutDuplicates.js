export default function (arrayOfObjects, attribute) {
  const arrayWithoutDuplicates = arrayOfObjects.filter(
    (obj, index, self) =>
      index === self.findIndex((o) => o[attribute] === obj[attribute])
  );
  return arrayWithoutDuplicates;
}
