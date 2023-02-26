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
function handleClickBtnReset(ev) {
  ev.preventDefault();
  cocktailFavList.innerHTML = '';
  cocktailList.innerHTML += PaintCocktail(cocktail);
}

//eventos
btnSearch.addEventListener('click', handleClickBtnSrch);
btnReset.addEventListener('click', handleClickBtnReset);
