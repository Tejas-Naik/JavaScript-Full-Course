import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: RESULTS_PER_PAGE,
    }
};

export const loadRecipe = async function (id) {
    try {
        // const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await getJSON(`${API_URL}${id}`);

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
        console.log(state.recipe);
    } catch (err) {
        console.error(`${err} ✌`);
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                image: rec.image_url,
                publisher: rec.publisher,
                title: rec.title,
            }
        })

    } catch (err) {
        console.error(`${err} ✌`);
        throw err;
    }
}

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = (page * state.search.resultsPerPage);

    return state.search.results.slice(start, end);
}