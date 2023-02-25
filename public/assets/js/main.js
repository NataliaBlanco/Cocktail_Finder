'use strict';

/* Instructions
 *1- Crear Una esctructura Básica de HTML dividida en sus correspondientes ficheros separados
 *2- Crear Constantes con las que se va a trabajar, y los arrays vacíos para los bucles e insertar info en ellos.
 *3-Crear esctructura de HTML que quiero que se me pinte en JS y meterla en una función comentada pra despueś trabajar con ella.
 *4- Crear un fetch para ver los datos con los que voy a trabajar en este caso direeccion de Api
 *5-Crear una función que cuando se haga click en la función de buscar se añadan los cóckteles de la búsqueda del listado previamente dado, en la cual meter vamos a meter el FETCH, porque queremos que nos traiga la info una vez se pinche el botón de click. Comprobar que están bien y que los traen bien de la API
 *6-
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
  let html = `<li class="js-li-card" id=${cocktail.idDrink}>
    <h3>${cocktail.strDrink}</h3>
    <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} width=150 height=150 class="">`;

  html += `</li>`;
  return html;
}

//PINTAR TODOS LOS COCKTELES DE LA LISTA DE MARGARITAS
function PaintAllCocktails(listCocktailData) {
  cocktailList.innerHTML = '';
  for (const cocktail of listCocktailData) {
    cocktailList.innerHTML += PaintCocktail(cocktail);
  }
  addEventToCard();
}

//FUNCION PARA CLICAR EN LAS CARDS DE LA LISTA Y SEELCCIONAR SUS IDs
function ClickFav(ev) {
  // A TRAVES DEL CURR.T HACE UN TOGGLE (pincha y despincha) CON LA CLASE CSS SEL.CRDS Y LAS PINTA Y DESPINTA DE ROSA
  ev.currentTarget.classList.toggle('selected_cards');
  const idCurrTrgt = ev.currentTarget.id;
  // ENCUENTRA EL ELEMENTO QUE TIENE COMO IDENTIFICADOR IDDRINKS
  const selectedCards = listCocktailData.find(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );
  // ENCUENTRA LA POSICION DE LOS COCKTAILS FAVS, EN LA LISTA DE FAVS PARA PROCEDER A BORRARLA LUEGO CON LA CONDICION
  const cocktailNum = listfavCocktailData.findIndex(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );

  if (cocktailNum === -1) {
    //pushea las que no estaban en la lista
    listfavCocktailData.push(selectedCards);
    // LAS PINTA EN EL HTML
    PaintFavCocktails(listfavCocktailData);
  } else listfavCocktailData.splice(cocktailNum, 1);
}

//FUNCIÓN QUE PINTA TODOS LOS COCKTAILS SELECCIONADOS EN EL LISTADO DE FAVORITOS
function PaintFavCocktails(listFavCocktailData) {
  cocktailFavList.innerHTML = '';
  for (const cocktail of listFavCocktailData) {
    cocktailFavList.innerHTML += PaintCocktail(cocktail);
  }
}

//events
//PARA SELECCIONAR TODAS LAS TARJETAS DE LA LISTA y ESCUCHAR EL EVENTO
function addEventToCard() {
  const allElementsList = document.querySelectorAll('.js-li-card');
  for (const card of allElementsList) {
    card.addEventListener('click', ClickFav);
  }
}

//# sourceMappingURL=main.js.map
