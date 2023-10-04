import addHomeImages from './addHomeImages.js';
import addListenerOnSearchBtn from './addListenerOnSearchBtn.js';

export default function () {
  addHomeImages(); // This function is necessary because of the webpack configuration.
  addListenerOnSearchBtn(); // This function sets an event listener on the search button.
  // Pendiente adicionar función que visibilice los componentes de home de forma global
}

// // Esta función pasará a llamarse showHomeElements.js,
// los elementos no serán añadidos a través del script sino de la plantilla html,
//   sin embargo, en principio no estarán visibles en el dom, sino que los haré
// visibles con la ayuda de js(jugando con las propiedades css),
//   la idea es que cuando se cargue el index.html no se visibilicen de golpe todos los elementos,
//     sino que aparezcan de forma gradual y entretenida
