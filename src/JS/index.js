"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import regeneratorRuntime from "regenerator-runtime";

const btnFilter = document.querySelector(".dropdown__btn");
const dropdownFilter = document.querySelector(".dropdown__filters");

btnFilter.addEventListener("click", function () {
  dropdownFilter.classList.add("scale-back");
});
///////////////////////////////////////////////
//Add a recipe
const controlAddRecipe = async function (url, uploadData) {
  try {
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
    //1. Load recipe
    const recipe = await model.loadRecipe(url);
    //2. render recipe view
    recipeView.renderView(recipe);
  } catch (err) {
    console.log(err);
  }
};

//////////////////////////////////////////////////
//Event handlers using Publisher-Subscriber pattern
const init = function () {
  recipeView.addOpenRecipeHandler(controlrecipeView);
  recipeView.closeRecipeView();
  addRecipeView.addFormEventHandler(controlAddRecipe);
  addRecipeView.openAddRecipeView();
  addRecipeView.closeAddRecipeView();
  addRecipeView.openAddRecipeMenu();
  addRecipeView.closeAddRecipeMenu();
};

init();
