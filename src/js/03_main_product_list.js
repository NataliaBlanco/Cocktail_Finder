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

//FUNCION PARA CLICAR EN LAS CARDS DE LA LISTA Y SEELCCIONAR cocktailIndex SUS IDs
function ClickFav(ev) {
  AllLists.classList.add('allLists');
  // A TRAVES DEL CURR.T HACE UN TOGGLE (pincha y despincha) CON LA CLASE CSS SEL.CRDS Y LAS PINTA Y DESPINTA DE ROSA
  ev.currentTarget.classList.toggle('selected_cards');
  const idCurrTrgt = ev.currentTarget.id;
  // ENCUENTRA EL ELEMENTO QUE TIENE COMO IDENTIFICADOR IDDRINKS
  const selectedCards = listCocktailData.find(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );
  // ENCUENTRA LA POSICION DE LOS COCKTAILS FAVS, EN LA LISTA DE FAVS PARA PROCEDER A BORRARLA LUEGO CON LA CONDICION
  const cocktailIndex = listfavCocktailData.findIndex(
    (cocktail) => cocktail.idDrink === idCurrTrgt
  );
  if (cocktailIndex === -1) {
    //pushea las que no estaban en la lista
    listfavCocktailData.push(selectedCards);
    // LAS PINTA EN EL HTML
    PaintFavCocktails(listfavCocktailData);
  } else {
    listfavCocktailData.splice(cocktailIndex, 1);
    PaintFavCocktails(listfavCocktailData);
  }
}

//FUNCIÓN QUE PINTA TODOS LOS COCKTAILS SELECCIONADOS EN EL LISTADO DE FAVORITOS
function PaintFavCocktails(listFavCocktailData) {
  cocktailFavList.innerHTML = '';
  for (const cocktail of listFavCocktailData) {
    cocktailFavList.innerHTML += PaintCocktail(cocktail);
  }
  localStorage.setItem('favCocktails', JSON.stringify(listfavCocktailData));
}

//events
//PARA SELECCIONAR TODAS LAS TARJETAS DE LA LISTA y ESCUCHAR EL EVENTO
function addEventToCard() {
  const allElementsList = document.querySelectorAll('.js-li-card');
  for (const card of allElementsList) {
    card.addEventListener('click', ClickFav);
  }
}
