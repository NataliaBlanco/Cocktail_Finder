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
