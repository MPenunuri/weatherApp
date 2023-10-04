import search from '../../apis/search.js';
import getInputValue from './getInputValue.js';
import showData from '../resultContainer/showData.js';
import getObjsWithoutDuplicates from '../../services/getObjsWithoutDuplicates.js';

export default async function () {
  try {
    const data = await search(getInputValue());
    // In some cases there will be some duplicated locations, so it's convenient to filter data before showing.
    const dataWithoutDuplicates = getObjsWithoutDuplicates([...data], 'url');
    showData(dataWithoutDuplicates); // This function displays data on the screen depending of the type of result.
  } catch (error) {
    console.log(error);
  }
}
