import 'core-js/stable';
import 'regenerator-runtime';
import * as model from './model.js';
import { default as recipeView, default as RecipeView } from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  }
  catch (err) {
    console.error(err);
  }
}

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}

init();