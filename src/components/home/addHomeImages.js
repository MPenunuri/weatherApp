import backgroundPic from '../../../assets/background-image.avif';
import appPic from '../../../assets/appIcon.svg';
import searchPic from '../../../assets/search-outline.svg';

export default function () {
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${backgroundPic})`;
  const appIcon = document.getElementById('appIcon');
  appIcon.setAttribute('src', appPic);
  const searchIcon = document.getElementById('searchIcon');
  searchIcon.setAttribute('src', searchPic);
}
