import View from './view';
import { POSTAPI_KEY } from '../config.js';
import icons from 'url:../../img/icons.svg';
class RecipeListView extends View {
  _parentElement = document.querySelector('.results');
  // _prevBtn = document.querySelector('.pagination__btn--prev');
  // _nextBtn = document.querySelector('.pagination__btn--next');
  // _prevBtnText = this._prevBtn.querySelector('span');
  // _nextBtnText = this._nextBtn.querySelector('span');

  _generateMarkup() {
    console.log(this._data);
    const html = this._data
      .map(
        recipe =>
          `<li class="preview">
        <a class="preview__link ${
          //SR1-06 get current recipe code , highlight that one from list
          recipe.id === window.location.hash.slice(1)
            ? 'preview__link--active'
            : ''
        }"  href="#${
            //SD3-01 hash change when user click on recipelist
            recipe.id
          }" >
         <figure class="preview__fig">
           <img src="${recipe.image_url}" alt="${recipe.title}" crossorigin/>
          </figure>
            <div class="preview__data">
              <h4 class="preview__title">${recipe.title}</h4>
              <p class="preview__publisher">${recipe.publisher}</p>

              <div class="preview__user-generated ${
                recipe.key !== POSTAPI_KEY ? 'hidden' : ''
              }">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
              
            </div>
        </a>
     </li>`
      )
      .join(' ');
    return html;
    // const markup = ;
    // markup.join();
    //console.log(markup);
    //return markup;
  }

  //SD3-02 whenever hash change or reload page, invoke controlRecipe
  addHandlerWindow(handler) {
    //Publish–subscribe pattern
    //listen hashchange and load event
    ['hashchange', 'load'].forEach(v => window.addEventListener(v, handler));
  }
  // addHandlerBtns(prevHandler, nextHandler) {
  //   this._prevBtn.addEventListener('click', prevHandler);
  //   this._nextBtn.addEventListener('click', nextHandler);
  //   //maintain two queue or stack
  // }

  // hidePrevBtn() {
  //   this._prevBtn.classList.add('hidden');
  // }
  // showPrevBtn() {
  //   this._prevBtn.classList.remove('hidden');
  // }
  // hideNextBtn() {
  //   this._nextBtn.classList.add('hidden');
  // }
  // showNextBtn() {
  //   this._nextBtn.classList.remove('hidden');
  // }

  // setPrevBtnText(number) {
  //   this._prevBtnText.textContent = `Page ${number}`;
  //   ///
  // }
  // setNextBtnText(number) {
  //   this._nextBtnText.textContent = `Page ${number}`;
  //   // this._prevBtn.childNodes[0].textContent = number.toString();
  // }

  //   activeRecipe(id) {}
}

export default recipeListView = new RecipeListView();
