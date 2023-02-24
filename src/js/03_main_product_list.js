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
