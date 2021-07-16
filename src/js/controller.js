import * as model from './model.js';
import recipeView from './views/recipeView.js';

// for bable in the parcel to polyfill 'promise'
import 'regenerator-runtime/runtime';
// for bable in the parcel to polyfill other ES 6 and above features
import 'core-js/stable';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
//https://forkify-api.herokuapp.com/api/v2/recipes/:id

//#region  listen hashchange and load event
['hashchange', 'load'].forEach(v => {
  window.addEventListener(v, () => {
    controlRecipe();
  });
});
//#endregion

const controlRecipe = async function () {
  try {
    //get hash value from url
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    //asking model loading data
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
    // 1.2 Rendering recipe

    // 1.3 clear message and loading spinner
  } catch (err) {
    console.error(err);
  }
};

//showRecipe();
//#endregion