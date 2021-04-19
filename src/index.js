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
const dropFilter = document.querySelector(".filter-link");
const filterList = document.querySelector(".menu-view__sublist");

// addRecipe.addEventListener("click", function () {
//   recipeView.style.display = "block";
// });

body.addEventListener("click", (event) => {
  if (event.target !== addRecipe && event.target !== menuAddRecipe) {
    return;
  }
  viewMenu.style.display = "none";
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
  viewMenu.style.display = "block";
  body.classList.add("my-body-noscroll-class");
});

closeMenu.addEventListener("click", function () {
  viewMenu.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
});

dropFilter.addEventListener("click", function () {
  filterList.classList.toggle("hidden");
});

///////////////////////////////////////////////
//Add a recipe
const form = document.querySelector(".add-recipe-view__form");
const submitFormBtn = document.querySelector(".btn--form");
const titleInput = document.getElementById("title");
const dataArr = [...new FormData(form)];
console.log(dataArr);
const data = Object.fromEntries(dataArr);
console.log(data);

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const sendJSON = async function (url, uploadData) {
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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(Object.fromEntries(dataArr));
  sendJSON("http://192.168.4.10:8300/recipes", data);
});
