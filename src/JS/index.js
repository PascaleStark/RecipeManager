"use strict";
import { timeout } from "./helper";
import * as model from "./model";
import recipeView from "./view/recipeView";
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

const addrecipe = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const resp = await Promise.race([fetchPro, timeout(10)]);
    //console.log(resp);
    const data = await resp.json();
    //console.log(data);
    if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);
    return data;
  } catch (err) {
    alert(
      `${err} There was an error posting this recipe, please try again later!`
    );
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
  // console.log(result);
  //close form
  addrecipeView.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
  //add success message
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
const init = function () {
  recipeView.addOpenRecipeHandler(controlrecipeView);
  recipeView.closeRecipeView();
};

init();
