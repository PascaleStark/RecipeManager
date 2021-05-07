"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import searchRecipeView from "./view/searchRecipesView";
import favouritesView from "./view/favouritesView";
import featured from "./view/featuredView";
import regeneratorRuntime, { mark } from "regenerator-runtime";
import { URL } from "./config.js";
import featuredView from "./view/featuredView";

const btnFilter = document.querySelector(".dropdown__btn");
const dropdownFilter = document.querySelector(".dropdown__filters");

btnFilter.addEventListener("click", function () {
  dropdownFilter.classList.add("scale-back");
});
////////////////////ADD RECIPE//////////////////////////////
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
////////////////////RECIPE VIEW//////////////////////////////
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
////////////////////SEARCH//////////////////////////////
const controlSearchRecipe = async function (query) {
  try {
    //1. render spinner
    searchRecipeView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const searchResults = await model.searchRecipe(`${URL}/search?q=${query}`);
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    searchRecipeView.renderResultsView(searchResults);
  } catch (err) {
    console.error(err);
  }
};
////////////////////FAVOURITES//////////////////////////////
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

const controlLoadFavourites = async function () {
  try {
    //1. render spinner
    favouritesView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const favouritesResults = await model.searchRecipe(
      `${URL}/where?favourites=1`
    );
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    favouritesView.renderResultsView(favouritesResults);
  } catch (err) {
    console.error(err);
  }
};
////////////////////FEATURED//////////////////////////////
const controlLoadFeatured = async function () {
  try {
    //1. render spinner
    featuredView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const featuredResults = await model.searchRecipe(`${URL}/where?featured=1`);
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    featuredView.renderResultsView(featuredResults);
  } catch (err) {
    console.error(err);
  }
};
controlLoadFeatured();
//////////////////////////////////////////////////
//Event handlers using Publisher-Subscriber pattern
const init = function () {
  recipeView.openRecipeView(controlrecipeView);
  addRecipeView.addFormEventHandler(controlAddRecipe);
  searchRecipeView.openSearchRecipeView(controlSearchRecipe);
  favouritesView.toggleFavourites(controlFavouriteRecipes);
  favouritesView.openFavouritesView(controlLoadFavourites);
};

init();
