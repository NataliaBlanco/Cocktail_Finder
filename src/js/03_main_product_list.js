'use strict';

//function
//Pintar UN COCKTAIL DE LA LISTA DE MARGARITAS
function PaintCocktail(cocktail) {
  let html = `<li class="js-li-card" id=${cocktail.idDrink}>
    <h3>${cocktail.strDrink}</h3>
    <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} width=150 height=150 class="">`;

  html += `</li>`;
  cocktailList.innerHTML += html;
}

//PINTAR TODOS LOS COCKTELES DE LA LISTA DE MARGARITAS
function PaintAllCocktails(listCocktailData) {
  cocktailList.innerHTML = '';
  for (const cocktail of listCocktailData) {
    PaintCocktail(cocktail);
  }
  addEventToCard();
}

//FUNCION PARA CLICAR EN LAS CARDS DE LA LISTA Y SEELCCIONAR SUS IDs
function ClickFav(ev) {
  ev.currentTarget.classList.toggle('selected_cards');
  const selectedCards = listCocktailData.find(
    (cocktail) => cocktail.idDrink === ev.currentTarget.id
  );
}

//PARA SELECCIONAR TODAS LAS TARJETAS DE LA LISTA y ESCUCHAR EL EVENTO
function addEventToCard() {
  const allElementsList = document.querySelectorAll('.js-li-card');
  for (const card of allElementsList) {
    card.addEventListener('click', ClickFav);
  }
}

// CREAR LISTA DE FAVORITOS
/* 
function PaintFavCocktail(cocktail) {
  let html = `<li class="js-li-card" id=${cocktail.idDrink}>
    <h3>${cocktail.strDrink}</h3>
    <img src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} width=150 height=150 class="">`;

  html += `</li>`;
  cocktailFavList.innerHTML += html;
}
 */
//events
