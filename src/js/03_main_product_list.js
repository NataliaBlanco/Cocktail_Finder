'use strict';

//function
//Pintar UN COCKTAIL DE LA LISTA DE MARGARITAS
function PaintCocktail(cocktail) {
  let html = `<li class="js-li-card selected_cards" id=${cocktail.idDrink}>
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
  addEventToCard();
}

//FUNCION PARA CLICAR EN LAS CARDS DE LA LISTA
function ClickFav(ev) {
  console.log(ev.currentTarget.id);

  ev.currentTarget.classlist.add('selected_cards');
}

//PARA SELECCIONAR TODAS LAS TARJETAS DE LA LISTA

function addEventToCard() {
  const allElementsList = document.querySelectorAll('.js-li-card');
  for (const card of allElementsList) {
    card.addEventListener('click', ClickFav);
  }
}

//events
