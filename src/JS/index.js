"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
import regeneratorRuntime from "regenerator-runtime";

const body = document.getElementsByTagName("body")[0];
const addRecipe = document.querySelector(".nav__add-recipe--btn");
const menuAddRecipe = document.querySelector(".addrecipe");
const closeForm = document.querySelector(".icon__close-form");
const addrecipeView = document.querySelector(".add-recipe-view");
const btnMenu = document.querySelector(".hamburger-menu");
const viewMenu = document.querySelector(".menu-section");
const closeMenu = document.querySelector(".menu-view__icon");
const btnFilter = document.querySelector(".dropdown__btn");
const dropdownFilter = document.querySelector(".dropdown__filters");

body.addEventListener("click", (event) => {
  if (event.target !== addRecipe && event.target !== menuAddRecipe) {
    return;
  }
  viewMenu.style.display = "none";
  addrecipeView.style.display = "block";
});

closeForm.addEventListener("click", function () {
  addrecipeView.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
});

btnMenu.addEventListener("click", function () {
  viewMenu.style.display = "block";
  body.classList.add("my-body-noscroll-class");
});

closeMenu.addEventListener("click", function () {
  viewMenu.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
});

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
    addRecipeView.renderRecipeView();
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
    recipeView.renderRecipeView(recipe);
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
};

init();
