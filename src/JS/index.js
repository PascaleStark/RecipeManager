"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import searchRecipeView from "./view/searchRecipesView";
import favouritesView from "./view/favouritesView";
import paginationView from "./view/paginationView";
import alertView from "./view/alertView";
import filter from "./view/filterView";
import regeneratorRuntime, { mark } from "regenerator-runtime";
import { URL, TIMEOUT } from "./config.js";
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
    addRecipeView.renderSuccessMessage();
    //3. close Success Message
    setTimeout(function () {
      addRecipeView.closeSuccessMessage();
    }, TIMEOUT);
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
    const searchResults = await model.searchRecipes(
      `${URL}/search?q=${query}`,
      query
    );
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    searchRecipeView.renderResultsView(searchResults.recipes);
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
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
  } catch (err) {
    console.error(err);
  }
};

const controlLoadFavourites = async function () {
  try {
    //1. render spinner
    favouritesView.renderSpinner();
    //2. look for all the recipes with the given keyword
    const favouritesResults = await model.searchRecipes(
      `${URL}/where?favourites=1`
    );
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    favouritesView.renderResultsView(favouritesResults.recipes);
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
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
    const featuredResults = await model.searchRecipes(
      `${URL}/where?featured=1`
    );
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    featuredView.renderResultsView(featuredResults.recipes);
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
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
    const filteredResults = await model.searchRecipes(
      `${URL}/search?q=${searchQuery}&filter=category&value=${filterQuery}`
    );
    //3. render the recipe cards with pagination
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    console.log(filteredResults.recipes);
    filterView.renderResultsView(filteredResults.recipes);
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
    filterView.toggleDropdownFilters();
  } catch (err) {
    console.error(err);
  }
};

// const controlfilterFavourites = async function (filterQuery) {
//   try {
//     //1. render spinner
//     filterView.renderSpinner();
//     //2. look for all the recipes with the given keyword
//     const filteredResults = await model.searchRecipes(
//       `${URL}/favourites=1&filter=category&category=${filterQuery}`
//     );
//     //3. render the recipe cards with pagination
//     // if (searchResults.length === 0)
//     //   throw new Error(`There are no results for your search!`);
//     console.log(filteredResults.recipes);
//     filterView.renderResultsView(filteredResults.recipes);
//     ///////////FETCHING HEADER INFORMATION//////////
//     fetchHeaderInfo();
//     filterView.toggleDropdownFilters();
//   } catch (err) {
//     console.error(err);
//   }
// };
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

const controlPaginationNumber = async function (pageNum) {
  try {
    //1. load page results
    const pageResults = await model.searchRecipesByPage(pageNum);
    //2. Choose title View
    const checkTitleView = pageResults.recipes.every(
      (el) => el.favourites === true
    );
    //3. render page results with title View
    checkTitleView
      ? `${favouritesView.renderResultsView(pageResults.recipes)}`
      : `${searchRecipeView.renderResultsView(pageResults.recipes)}`;
  } catch (err) {
    console.log(err);
  }
};

const fetchHeaderInfo = async function () {
  const pagInfo = await model.getHeaders();
  console.log(pagInfo);
  controlPagination(pagInfo);
};
////////////////////DELETE RECIPE//////////////////////////////
const controlDeleteRecipe = async function () {
  try {
    const deleteRec = await model.deleteRecipe();
    console.log(deleteRec);
    //render success message
    alertView.renderSuccessMessage();
    //close success message after 3s
    setTimeout(function () {
      alertView.closeSuccessMessage();
      location.reload();
    }, TIMEOUT);
  } catch (err) {
    console.log(err);
  }
};

const controlSetDeleteID = function (id) {
  model.setDeleteID(id);
};
//Event handlers using Publisher-Subscriber pattern
const init = function () {
  recipeView.openRecipeView(controlrecipeView);
  addRecipeView.addFormEventHandler(controlAddRecipe);
  searchRecipeView.openSearchRecipeView(controlSearchRecipe);
  favouritesView.toggleFavourites(controlFavouriteRecipes);
  favouritesView.openFavouritesView(controlLoadFavourites);
  featuredView.toggleFeatured(controlFeaturedRecipes);
  filterView.openFilterSearchView(controlfilterSearch);
  paginationView.togglePageView(controlPaginationNumber);
  alertView.showAlertMsg(controlSetDeleteID);
  alertView.deleteRecipeHandler(controlDeleteRecipe);
};

init();
