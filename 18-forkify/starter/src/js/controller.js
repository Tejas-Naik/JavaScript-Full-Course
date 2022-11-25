import 'core-js/stable';
import 'regenerator-runtime';
import * as model from './model.js';
import { default as recipeView, default as RecipeView } from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

// Event Handlers
const events = ['hashchange', 'load']
  .forEach(
    event => window.addEventListener(event, controlRecipes)
  );
