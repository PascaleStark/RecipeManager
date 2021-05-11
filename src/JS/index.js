"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import searchRecipeView from "./view/searchRecipesView";
import favouritesView from "./view/favouritesView";
import paginationView from "./view/paginationView";
import filter from "./view/filterView";
import regeneratorRuntime, { mark } from "regenerator-runtime";
import { URL } from "./config.js";
import featuredView from "./view/featuredView";
import filterView from "./view/filterView";

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
const controlSearchRecipe = async function (url) {
  try {
    //1. render spinner
    searchRecipeView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const searchResults = await model.searchRecipe(url);
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    searchRecipeView.renderResultsView(searchResults);
    ///////////FETCHING HEADER INFORMATION//////////
    const pagInfo = await model.getHeaders(url);
    console.log(pagInfo);
    controlPagination(pagInfo);
    searchRecipeView.togglePageView(controlSearchRecipe);
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

const controlLoadFavourites = async function (url) {
  try {
    //1. render spinner
    favouritesView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const favouritesResults = await model.searchRecipe(url);
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    favouritesView.renderResultsView(favouritesResults);
    ///////////FETCHING HEADER INFORMATION//////////
    const pagInfo = await model.getHeaders(url);
    console.log(pagInfo);
    controlPagination(pagInfo);
    // showPageNumInfo(`${URL}/where?favourites=1`);
    paginationView.togglePageView(controlLoadFavourites);
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
    ///////////FETCHING HEADER INFORMATION//////////
    const pagInfo = await model.getHeaders(`${URL}/where?featured=1`);
    console.log(pagInfo);
    controlPagination(pagInfo);
  } catch (err) {
    console.error(err);
  }
};

const controlFeaturedRecipes = async function (url) {
  try {
    //1. look for all the recipes with the given keyword
    const featuredRec = await model.editFavourites(url);
    console.log(featuredRec);
    //2. toggle star icon fill
  } catch (err) {
    console.error(err);
  }
};
controlLoadFeatured();
////////////////////FILTERED//////////////////////////////
const controlfilterSearch = async function (searchQuery, filterQuery) {
  try {
    //1. render spinner
    filterView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const filteredResults = await model.searchRecipe(
      `${URL}/search?q=${searchQuery}&filter=category&category=${filterQuery}`
    );
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    console.log(filteredResults);
    filterView.renderResultsView(filteredResults);
    ///////////FETCHING HEADER INFORMATION//////////
    const pagInfo = await model.getHeaders(
      `${URL}/search?q=${searchQuery}&filter=category&category=${filterQuery}`
    );
    console.log(pagInfo);
    filterView.toggleDropdownFilters();
  } catch (err) {
    console.error(err);
  }
};
////////////////////PAGINATION//////////////////////////////
const controlPagination = function (pagInfo) {
  const paginationArr = [];
  //pagInfo[0] --> pageCount
  for (let i = 0; i < +pagInfo[0]; i++) {
    const markupPage = `<button data-pg="${i + 1}" class="pagination__link">${
      i + 1
    }</button>`;
    paginationArr.push(markupPage);
    console.log(paginationArr);
  }
  paginationView.renderView(paginationArr);
};

// const showPageNumInfo = function (url) {
//   paginationView.togglePageView(url);
// };
//Event handlers using Publisher-Subscriber pattern
const init = function () {
  recipeView.openRecipeView(controlrecipeView);
  addRecipeView.addFormEventHandler(controlAddRecipe);
  searchRecipeView.openSearchRecipeView(controlSearchRecipe);
  favouritesView.toggleFavourites(controlFavouriteRecipes);
  favouritesView.openFavouritesView(controlLoadFavourites);
  featuredView.toggleFeatured(controlFeaturedRecipes);
  filterView.openFilterSearchView(controlfilterSearch);
  // paginationView.togglePageView(controlLoadFavourites);
  // paginationView.togglePageView(controlSearchRecipe);
};

init();
