"use strict";

const body = document.getElementsByTagName("body")[0];
const addRecipe = document.querySelector(".nav__add-recipe--btn");
const menuAddRecipe = document.querySelector(".addrecipe");
const closeForm = document.querySelector(".icon__close-form");
const viewRecipe = document.querySelector(".recipe__card--btn");
const closeView = document.querySelector(".icon__close-view");
const recipeView = document.querySelector(".add-recipe-view");
const recipeDisplay = document.querySelector(".recipe-view");
const btnMenu = document.querySelector(".hamburger-menu");
const viewMenu = document.querySelector(".menu-section");
const closeMenu = document.querySelector(".menu-view__icon");
const dropFilter = document.querySelector(".link__chevron-down");
const filterList = document.querySelector(".menu-view__sublist");

// addRecipe.addEventListener("click", function () {
//   recipeView.style.display = "block";
// });

body.addEventListener("click", (event) => {
  if (event.target !== addRecipe && event.target !== menuAddRecipe) {
    return;
  }
  viewMenu.classList.toggle("hidden");
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

btnMenu.addEventListener("click", function () {
  viewMenu.classList.toggle("hidden");
  body.classList.add("my-body-noscroll-class");
});

closeMenu.addEventListener("click", function () {
  viewMenu.classList.toggle("hidden");
  body.classList.remove("my-body-noscroll-class");
});

dropFilter.addEventListener("click", function () {
  filterList.classList.toggle("hidden");
});
