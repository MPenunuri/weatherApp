import searchData from '../searchBar/searchData.js';

export default function () {
  const searchBtn = document.getElementById('searchButton');
  searchBtn.addEventListener('click', searchData);
}
