'use strict';

/* Instructions
 *1- Crear Una esctructura Básica de HTML dividida en sus correspondientes ficheros separados
 *2- Crear Constantes con las que se va a trabajar, y los arrays vacíos para los bucles e insertar info en ellos.
 *3-Crear esctructura de HTML que quiero que se me pinte en JS y meterla en una función comentada pra despueś trabajar con ella.
 *4- Crear un fetch para ver los datos con los que voy a trabajar en este caso direccion de Api
 *5-Crear una función que cuando se haga click en la función de buscar se añadan los cóckteles de la búsqueda del listado previamente dado, en la cual meter vamos a meter el FETCH, porque queremos que nos traiga la info una vez se pinche el botón de click. Comprobar que están bien y que los traen bien de la API.
 *6-Crear la lista de favrios con los diferentes métodos y añadirle un formato en la lista normal para que queden marcados
 *7-Guardar en el LS, y que al refrescar sigan pintados
 *8-Traer de LS, se refresca y se pinta
 *9-
 */
const AllLists = document.querySelector('.js-allLists');
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

/* const favCocktailStored = Json.parse(localStorage.getItem('favCocktails')); */
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
btnReset.addEventListener('click', handleClickBtnReset);

'use strict';

//function
//Pintar UN COCKTAIL DE LA LISTA DE MARGARITAS
function PaintCocktail(cocktail) {
  const cocktailIsFav = listfavCocktailData.findIndex(
    (eachCocktailFav) => cocktail.idDrink === eachCocktailFav.id
  );
  console.log(cocktailIsFav);
  let html = `<li class="js-li-card li-card" id=${cocktail.idDrink}>
    <h3 class=li-card-title>${cocktail.strDrink}</h3>
    <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} width=150 height=150 class="li-card-img">`;
  html += `</li>`;
  return html;
}

//PINTAR TODOS LOS COCKTELES DE LA LISTA DE MARGARITAS
function PaintAllCocktails(listCocktData) {
  cocktailList.innerHTML = '';
  for (const cocktail of listCocktData) {
    cocktailList.innerHTML += PaintCocktail(cocktail);
  }

  addEventToCard();
}

function PaintFavCocktail(cocktail) {
  let html = `<li class="js-li-card li-card" id=${cocktail.idDrink}>
  <i class="fas fa-trash-alt js-li-card-icon  li-card-icon" id=${cocktail.idDrink}></i>
    <h3 class=li-card-title>${cocktail.strDrink}</h3>
    <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} class="li-card-img">`;
  html += `</li>`;
  return html;
}
//FUNCIÓN QUE PINTA TODOS LOS COCKTAILS SELECCIONADOS EN EL LISTADO DE FAVORITOS
function PaintFavCocktails(listFavCocktailData) {
  cocktailFavList.innerHTML = '';
  for (const cocktail of listFavCocktailData) {
    cocktailFavList.innerHTML += PaintFavCocktail(cocktail);
  }
  DelFav();
}

//FUNCION PARA CLICAR EN LAS CARDS DE LA LISTA Y SEELCCIONAR cocktailIndex SUS IDs
function ClickFav(ev) {
  /* ev.currentTarget.classList.toggle('selected_cards'); */
  const idCurrTrgt = ev.currentTarget.id;
  const selectedCards = listCocktailData.find(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );
  const cocktailIndex = listfavCocktailData.findIndex(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );

  if (cocktailIndex === -1) {
    listfavCocktailData.push(selectedCards);
    ev.currentTarget.classList.add('selected_cards');
  } else {
    listfavCocktailData.splice(cocktailIndex, 1);
    ev.currentTarget.classList.remove('selected_cards');
  }
  PaintFavCocktails(listfavCocktailData);
  localStorage.setItem('favCocktails', JSON.stringify(listfavCocktailData));
}
//LAS COGE DEL LOCAL STORAGE
function pullFavList() {
  const listFavCocktail = JSON.parse(localStorage.getItem('favCocktails'));
  if (listFavCocktail) {
    listfavCocktailData = listFavCocktail;
    PaintFavCocktails(listFavCocktail);
  }
}
//LLAMAMOS A LA FUNCIÓN
pullFavList();

function handleClickBtnReset(ev) {
  ev.preventDefault();
  cocktailFavList.innerHTML = '';
  localStorage.removeItem('favCocktails');
  listfavCocktailData = [];
  cocktailList.innerHTML = '';
}

//FUNCIÓN PARA QUITAR DEL LISTADO DE FAVORITOS
function delFavCards(ev2) {
  const idCurrTrgt = ev2.currentTarget.id;
  const cocktailIndex = listfavCocktailData.findIndex(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );
  const favMainList = cocktailList.querySelector(`[id='${idCurrTrgt}']`);
  if (cocktailIndex !== -1) {
    listfavCocktailData.splice(cocktailIndex, 1);
    cocktailFavList.innerHTML = '';
    favMainList.classList.remove('selected_cards');
    localStorage.setItem('favCocktails', JSON.stringify(listfavCocktailData));
  }

  PaintFavCocktails(listfavCocktailData);
}

//EVENTOS
//PARA ESCUCHAR EL EVENTO Y SELECCIONAR TODAS LAS TARJETAS DE LA LISTA
function addEventToCard() {
  const allElementsList = document.querySelectorAll('.js-li-card');
  for (const card of allElementsList) {
    card.addEventListener('click', ClickFav);
  }
}
//PARA SELECCIONAR FAVORITOS Y BORRARLOS
function DelFav() {
  const btnXs = document.querySelectorAll('.js-li-card-icon');
  for (const Xbtn of btnXs) {
    Xbtn.addEventListener('click', delFavCards);
  }
}

//# sourceMappingURL=main.js.map
