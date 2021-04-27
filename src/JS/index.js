"use strict";
import { timeout } from "./helper";
import * as model from "./model";
import recipeView from "./view/recipeView";
import regeneratorRuntime from "regenerator-runtime";

const body = document.getElementsByTagName("body")[0];
const addRecipe = document.querySelector(".nav__add-recipe--btn");
const menuAddRecipe = document.querySelector(".addrecipe");
const closeForm = document.querySelector(".icon__close-form");
const viewRecipeBtn = document.querySelector(".recipe__card--btn");
const closeView = document.querySelector(".icon__close-view");
const modalView = document.querySelector(".modal-view");
const addrecipeView = document.querySelector(".add-recipe-view");
const recipeDisplay = document.querySelector(".recipe-view");
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

const addrecipe = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const resp = await Promise.race([fetchPro, timeout(10)]);
    const data = await resp.json();
    console.log(data);
    if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
const form = document.querySelector(".add-recipe-view__form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(form)];
  const data = Object.fromEntries(dataArr);
  console.log(data);
  //clear form
  form.reset();
  addrecipe("http://192.168.4.10:8300/recipes", data);
});
///////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////
//Event handlers using Publisher-Subscriber pattern
// const init = function () {
//   recipeView.addOpenRecipeHandler(controlrecipeView);
//   recipeView.addCloseRecipeHandler();
// };

// init();

viewRecipeBtn.addEventListener("click", function () {
  recipeDisplay.style.display = "block";
  controlrecipeView("http://192.168.4.10:8300/recipes/where?id=6");
});

modalView.addEventListener("click", function (e) {
  if (e.target && e.target.id === "closeModal")
    recipeDisplay.style.display = "none";
});
