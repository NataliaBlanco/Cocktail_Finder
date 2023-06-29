'use strict';

//function
//Pintar UN COCKTAIL DE LA LISTA DE MARGARITAS
function PaintCocktail(cocktail) {
  const cocktailIsFav = listfavCocktailData.findIndex(
    (eachCocktailFav) => cocktail.idDrink === eachCocktailFav.id
  );
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
  title.innerHTML= "Favoritos";
   cocktailFavList.innerHTML = '';
for (const cocktail of listFavCocktailData) {
    cocktailFavList.innerHTML += PaintFavCocktail(cocktail);
  };
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
  title.innerHTML = '';
  PaintAllCocktails(listCocktailData); 
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
