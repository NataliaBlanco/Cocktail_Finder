'use strict';

/* Instructions
 *1- Crear Una esctructura Basica de HTML dividida en sus correspondientes ficheros separados
 *2- Crear Constantes con las que se va a trabajar, y los arrays vacíos para los bucles
 *3-Crear esctructura que quiero que se me pinte en JS
 *4-Crear una función que cuando se haga click en la función de buscar se añadan los cóckteles de la búsqueda y del listado previamente dado
 *5-
 *6-traer los datos con los que se van a trabajar, comprobar que están bien y que los traen bien de la API
 *7
 *8-
 */

const inputCocktailName = document.querySelector('.js-input-cocktail');
const btnSearch = document.querySelector('.js-btn-search');
const btnReset = document.querySelector('.js-btn-reset');
const cocktailList = document.querySelector('.js-list');
const cocktailFavList = document.querySelector('.js-favourites-list');
const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

let listCocktailData = [];

let listfavCocktailData = [];

fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    listCocktailData = data.drinks;
  });

'use strict';
//function
/* const typeCocktailName = inputCocktailName.value;
console.log(typeCocktailName); */

function typeCocktailName(msg) {
  inputCocktailName.innerHTML = msg;
}

const cocktailName = drinks.find((cocktail) => cocktail.value);

'use strict';

//function
function handleClickBtnSrch(cocktails) {
  let html = `<li>
    <h3></h3>
    <a>url</a>`;

  html += `</li>`;

  return (cocktailList.innerHTML = html);
}

//eventos
btnSearch.addEventListener('click', handleClickBtnSrch);

//# sourceMappingURL=main.js.map
