'use strict';

//function
function handleClickBtnSrch(cocktails) {
  let html = `<li>
    <h3></h3>
    <a>url</a>`;

  html += `</li>`;

  return (cocktailList.innerHTML = html);
}

//eventos
btnSearch.addEventListener('click', handleClickBtnSrch);
