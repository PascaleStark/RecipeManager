"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import searchRecipeView from "./view/searchRecipesView";
import favouritesView from "./view/favouritesView";
import paginationView from "./view/paginationView";
import alertView from "./view/alertView";
import regeneratorRuntime, { mark } from "regenerator-runtime";
import { URL, TIMEOUT } from "./config.js";
import featuredView from "./view/featuredView";
import filterView from "./view/filterView";
import menuView from "./view/menuView";
import errorView from "./view/errorView";
import editRecipeView from "./view/editRecipeView";
import View from "./view/view";

////////////////////ADD RECIPE//////////////////////////////
//Add a recipe
const controlAddRecipe = async function (url, uploadData) {
  try {
    //1. render spinner
    addRecipeView.renderSpinner();
    //1. Add Recipe
    const result = await model.addRecipe(url, uploadData);
    //2. Render Success Message
    addRecipeView.renderSuccessMessage();
    //3. close Success Message
    setTimeout(function () {
      addRecipeView.closeMessage();
      //location.reload();
    }, TIMEOUT);
    //4. send imageFile
    controlImageFile();
    //5. post the image
    model.saveImageFile(`${URL}/upload/${result[0].id}`);
    //6. reload page
    location.reload();
  } catch (err) {
    //Render fail message
    console.log(err);
    addRecipeView.renderFailMessage(err);
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
    recipeView.renderFailMessage(err);
  }
};
////////////////////SEARCH//////////////////////////////
const controlSearchRecipe = async function (query) {
  try {
    if (query.trim() === "") {
      searchRecipeView.renderNoResultsMsg();
      fetchHeaderInfo();
      return;
    }
    //1. look for all the recipes with the given keyword
    const searchResults = await model.searchRecipes(
      `${URL}/search?q=${query}`,
      query
    );
    console.log(searchResults);
    if (!searchResults) throw error;
    if (searchResults.recipes.length === 0) {
      searchRecipeView.renderNoResultsMsg();
    } else {
      //2. render spinner
      searchRecipeView.renderSpinner();
      //3. render the recipe cards with pagination
      searchRecipeView.renderResultsView(searchResults.recipes);
      ///////////FETCHING HEADER INFORMATION//////////
      fetchHeaderInfo();
    }
  } catch (err) {
    console.error(err);
    errorView.showErrorView(err);
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
    errorView.showErrorView(err);
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
    favouritesView.renderResultsView(favouritesResults.recipes);
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
  } catch (err) {
    console.error(err);
    errorView.showErrorView(err);
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
    featuredView.renderResultsView(featuredResults.recipes);
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
  } catch (err) {
    console.error(err);
    errorView.showErrorView(err);
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
      `${URL}/search?q=${searchQuery}&filter=category&value=${filterQuery}`,
      searchQuery
    );
    //3. render the recipe cards with pagination
    console.log(filteredResults.recipes);
    console.log(filteredResults.url);
    if (!filteredResults) throw error;
    if (filteredResults.recipes.length === 0) {
      filterView.renderNoResultsMsg();
    } else {
      filterView.renderResultsView(filteredResults.recipes);
    }
    ///////////FETCHING HEADER INFORMATION//////////
    fetchHeaderInfo();
    filterView.toggleDropdownFilters();
  } catch (err) {
    console.error(err);
    errorView.showErrorView(err);
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
    const markupPage = `<button data-pg="${
      i + 1
    }" class="pagination__link" id="pagination-number">${i + 1}</button>`;
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
      ? `${favouritesView.renderResultsView(pageResults.recipes, pageNum)}`
      : `${searchRecipeView.renderResultsView(pageResults.recipes, pageNum)}`;
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
    if (!deleteRec) throw err;
    //render success message
    alertView.renderSuccessMessage();
    //close success message after 3s
    setTimeout(function () {
      alertView.closeMessage();
      location.reload();
    }, TIMEOUT);
  } catch (err) {
    console.log(err);
    errorView.showErrorView(err);
  }
};

const controlSetDeleteID = function (id) {
  model.setDeleteID(id);
};
///////////////////UPLOAD RECIPE IMAGE/////////////////////////
const controlImageFile = function () {
  model.updateImageFile(...addRecipeView._imageFile);
  console.log(addRecipeView._imageFile);
};
///////////////////UPLOAD RECIPE IMAGE/////////////////////////
const controlEditRecipe = async function (url, id) {
  try {
    //1. render spinner
    //DOES NOT WORK!
    //editRecipeView.renderSpinner();
    //2. Load recipe Object
    const recipe = await model.loadRecipe(url);
    console.log(recipe);
    editRecipeView.fillEditRecipeForm(recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderFailMessage(err);
  }
};
//Event handlers using Publisher-Subscriber pattern
const init = function () {
  recipeView.openRecipeView(controlrecipeView);
  addRecipeView.addFormEventHandler(controlAddRecipe);
  searchRecipeView.openSearchRecipeView(controlSearchRecipe);
  favouritesView.toggleFavourites(controlFavouriteRecipes);
  favouritesView.openFavouritesView(controlLoadFavourites);
  menuView.openFavouritesMenuView(controlLoadFavourites);
  featuredView.toggleFeatured(controlFeaturedRecipes);
  filterView.openFilterSearchView(controlfilterSearch);
  paginationView.togglePageView(controlPaginationNumber);
  alertView.showAlertMsg(controlSetDeleteID);
  alertView.deleteRecipeHandler(controlDeleteRecipe);
  editRecipeView.openEditRecipeView(controlEditRecipe);
};

init();
