'use strict';
//function
/* const typeCocktailName = inputCocktailName.value;
console.log(typeCocktailName); */

function typeCocktailName(msg) {
  inputCocktailName.innerHTML = msg;
}

const cocktailName = drinks.find((cocktail) => cocktail.value);
