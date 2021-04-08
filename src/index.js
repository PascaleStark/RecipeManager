"use strict";

const addRecipe = document.querySelector(".header__add-recipe--btn");
const closeForm = document.querySelector(".icon__close-form");
const viewRecipe = document.querySelector(".recipe__card--btn");
const closeView = document.querySelector(".icon__close-view");
const recipeView = document.querySelector(".add-recipe-view");
const recipeDisplay = document.querySelector(".recipe-view");

addRecipe.addEventListener("click", function () {
  recipeView.style.display = "block";
});

closeForm.addEventListener("click", function () {
  recipeView.style.display = "none";
});

viewRecipe.addEventListener("click", function () {
  recipeDisplay.style.display = "block";
});

closeView.addEventListener("click", function () {
  recipeDisplay.style.display = "none";
});
