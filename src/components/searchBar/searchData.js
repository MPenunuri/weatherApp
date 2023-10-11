import search from '../../apis/search.js';
import getInputValue from './getInputValue.js';
import requestHandler from '../resultContainer/requestHandler.js';
import getObjsWithoutDuplicates from '../../services/getObjsWithoutDuplicates.js';

export default async function () {
  try {
    const data = await search(getInputValue());
    // In some cases there will be some duplicated locations, so it's convenient to filter data before showing.
    const dataWithoutDuplicates = getObjsWithoutDuplicates([...data], 'url');
    requestHandler(dataWithoutDuplicates); // This function display data on the screen depending of the type of result.
  } catch (error) {
    console.log(error);
  }
}