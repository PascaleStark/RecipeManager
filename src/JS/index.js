"use strict";
import * as model from "./model";
import recipeView from "./view/recipeView";
import addRecipeView from "./view/addRecipeView";
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
const controlSearchRecipe = async function (query) {
  try {
    //1. look for all the recipes with the given keyword
    const searchResults = await model.searchRecipe(`${URL}/search?q=${query}`);
    //2. render the recipe cards with pagination
    document.querySelector(".recipe__container").innerHTML = "";
    // if (searchResults.length === 0)
    //   throw new Error(`There are no results for your search!`);
    searchResults.forEach((result) => {
      const markup = `<div class="recipe__card">
   <img
     src="./src/img/pizza.jpg"
     class="recipe__card--img"
     alt="recipe img"
   />
   <svg class="icon icon-heart recipe__card--icon">
     <use xlink:href="./src/img/icons.svg#icon-heart"></use>
   </svg>
   <h3 class="recipe__card--title heading--tertiary">${result.title}</h3>
   <div class="recipe__card--back" id="btn-view" data-id="${result.id}">
     <button class="btn recipe__card--btn hidden" ><span class="underline">View Recipe &rarr;</span></button>
   </div>
   </div>`;
      document
        .querySelector(".recipe__container")
        .insertAdjacentHTML("afterbegin", markup);
    });
    document.querySelector(".results__heading").textContent = "Search Results";
    document
      .querySelector(".results__heading")
      .scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    console.error(err);
  }
};

const searchForm = document.querySelector(".search");
console.log(searchForm);
searchForm.addEventListener("submit", function (e) {
  const searchEl = document.querySelector(".search__input");
  e.preventDefault();
  const query = searchEl.value;
  console.log(query);
  controlSearchRecipe(query);
  searchEl.value = "";
});

//view any result
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", function (e) {
  const targetEl = e.target.closest("#btn-view");
  console.log(targetEl);
  if (targetEl) {
    const id = targetEl.dataset.id;
    document.querySelector(".recipe-view").style.display = "block";
    controlrecipeView(`${URL}/where?id=${id}`);
  }
});
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
