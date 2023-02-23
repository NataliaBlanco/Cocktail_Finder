'use strict';

//function
function handleClickBtnSrch(cocktails) {
  let html = `<ul class="js-list">
  <li>
                    <h3>${cocktails.name}
                        <a href="${cocktails.strDrinkThumb}"></a>
                    </h3>;`;
  html += `
  </ul></li>`;
  html;
}

//eventos
btnSearch.addEventListener('click', handleClickBtnSrch);
