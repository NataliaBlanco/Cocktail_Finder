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

const cocktailDefault = 'margarita';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

let listCocktailData = [];

let listfavCocktailData = [];

'use strict';
//BUSCAR COCKTAILS POR SU NOMBRE
dataApi(cocktailDefault);

function handleClickBtnSrch(ev) {
  ev.preventDefault();
  const typeCocktailName = inputCocktailName.value;
  dataApi(typeCocktailName);
}

function dataApi(valueSearch) {
  fetch(url + valueSearch)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      listCocktailData = data.drinks;
      // PaintCocktailMargarita(listCocktailData[2]);
      PaintAllCocktails(listCocktailData);
    });
}

//eventos
btnSearch.addEventListener('click', handleClickBtnSrch);

'use strict';

//function
//Pintar UN COCKTAIL DE LA LISTA DE MARGARITAS
function PaintCocktail(cocktail) {
  let html = `<li>
    <h3>${cocktail.strDrink}</h3>
    <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} width=150 height=150>`;

  html += `</li>`;

  cocktailList.innerHTML += html;
}

//PINTAR TODOS LOS COCKTELES DE LA LISTA DE MARGARITAS
function PaintAllCocktails(listCocktailData) {
  cocktailList.innerHTML = '';
  for (const cocktail of listCocktailData) {
    PaintCocktail(cocktail);
  }
}

//# sourceMappingURL=main.js.map