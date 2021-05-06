"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import searchRecipeView from "./view/searchRecipesView";
import favouritesView from "./view/favouritesView";
import regeneratorRuntime, { mark } from "regenerator-runtime";
import { URL } from "./config.js";

const btnFilter = document.querySelector(".dropdown__btn");
const dropdownFilter = document.querySelector(".dropdown__filters");

btnFilter.addEventListener("click", function () {
  dropdownFilter.classList.add("scale-back");
});
///////////////////////////////////////////////
//Add a recipe
const controlAddRecipe = async function (url, uploadData) {
  try {
    //1. render spinner
    addRecipeView.renderSpinner();
    //1. Add Recipe
    const result = await model.addRecipe(url, uploadData);
    console.log(result);
    //2. Render Success Message
    addRecipeView.renderView();
  } catch (err) {
    console.log(err);
  }
};
////////////////////////////////////////////////
const controlrecipeView = async function (url) {
  try {
    //1. render spinner
    recipeView.renderSpinner();
    //2. Load recipe
    const recipe = await model.loadRecipe(url);
    //3. render recipe view
    recipeView.renderView(recipe);
  } catch (err) {
    console.log(err);
  }
};
//////////////////////////////////////////////////
const controlSearchRecipe = async function (query) {
  try {
    //1. render spinner
    searchRecipeView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const searchResults = await model.searchRecipe(`${URL}/search?q=${query}`);
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    searchRecipeView.renderSearchView(searchResults);
  } catch (err) {
    console.error(err);
  }
};
//////////////////////////////////////////////////
//on heart click --> send a patch request with recipe id -->endpoint: URL/favourites/{id} //PATCH
//on favourites click --> render all favourites in results container with h1 FAVOURITES -->endpoint: URL/where?favourites=1 //GET

const controlFavouriteRecipes = async function (url) {
  try {
    //1. look for all the recipes with the given keyword
    const favouriteRec = await model.editFavourites(url);
    console.log(favouriteRec);
    //2. toggle heart icon fill
  } catch (err) {
    console.error(err);
  }
};

//////////////////////////////////////////////////
//Event handlers using Publisher-Subscriber pattern
const init = function () {
  recipeView.openRecipeView(controlrecipeView);
  addRecipeView.addFormEventHandler(controlAddRecipe);
  searchRecipeView.openSearchRecipeView(controlSearchRecipe);
  favouritesView.toggleFavourites(controlFavouriteRecipes);
};

init();
