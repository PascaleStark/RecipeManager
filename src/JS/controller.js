"use strict";

const body = document.getElementsByTagName("body")[0];
const addRecipe = document.querySelector(".nav__add-recipe--btn");
const menuAddRecipe = document.querySelector(".addrecipe");
const closeForm = document.querySelector(".icon__close-form");
const viewRecipe = document.querySelector(".recipe__card--btn");
const closeView = document.querySelector(".icon__close-view");
const modalView = document.querySelector(".modal-view");
const recipeView = document.querySelector(".add-recipe-view");
const recipeDisplay = document.querySelector(".recipe-view");
const btnMenu = document.querySelector(".hamburger-menu");
const viewMenu = document.querySelector(".menu-section");
const closeMenu = document.querySelector(".menu-view__icon");
// const dropFilter = document.querySelector(".filter-link");
const btnFilter = document.querySelector(".dropdown__btn");
const dropdownFilter = document.querySelector(".dropdown__filters");
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

btnMenu.addEventListener("click", function () {
  viewMenu.style.display = "block";
  body.classList.add("my-body-noscroll-class");
});

closeMenu.addEventListener("click", function () {
  viewMenu.style.display = "none";
  body.classList.remove("my-body-noscroll-class");
});

// dropFilter.addEventListener("click", function () {
//   filterList.classList.toggle("hidden");
// });

btnFilter.addEventListener("click", function () {
  dropdownFilter.classList.add("scale-back");
});
///////////////////////////////////////////////
//Add a recipe
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
  //clear form
  form.reset();
  addrecipe("http://192.168.4.10:8300/recipes", data);
});
///////////////////////////////////////////////////////////
//view recipe

const loadRecipe = async function (url) {
  try {
    //load recipe object
    const fetchPro = fetch(url, {
      method: "GET",
      // mode: "no-cors",
    });
    const resp = await Promise.race([fetchPro, timeout(30)]);
    const data = await resp.json();
    console.log(data);

    //refactoring the recipe object
    const recipeObject = data[0];
    console.log(recipeObject);
    const recipe = {
      title: recipeObject.name,
      publisher: recipeObject.addedBy,
      category: recipeObject.category,
      prepartionTime: recipeObject.prepTime,
      cookingTime: recipeObject.cookingTime,
      servings: recipeObject.servings,
      url: recipeObject.url,
      ingredients: recipeObject.ingredients,
      directions: recipeObject.directions,
    };
    console.log(recipe);

    //adding the html element dynamically to the recipe view
    const markup = `
    <svg class="icon icon__close-view icon__close-outline" id="closeModal">
          <use
            xlink:href="./src/img/sprite.svg#icon-close-outline"
          ></use></svg>
  <h1 class=" heading--secondary">${recipe.title}</h1>
    <div class="recipe-view__info">
      <div class="recipe-view__ingredients">
        <h2 class="heading--tertiary">Ingredients</h2>
        
        <div class="recipe-view__ingredients--details">
          <ul class="list-style">
          ${recipe.ingredients
            .map((ing) => {
              return `<li><svg class="icon icon__cheveron-right">
            <use
              xlink:href="./src/img/sprite.svg#icon-cheveron-right"
            ></use></svg
          ><span class="recipe-view__element--text">${ing}</span></li>`;
            })
            .join("")}
          </ul>
        </div>
      </div>
      
      <div class="recipe-view__info--details">
        <svg class="icon icon__file--text">
          <use
            xlink:href="./src/img/sprite.svg#icon-file-text"
          ></use></svg
        >
        <ul class="list-style">
          <li><span class="text-bolder">Preparation time:</span> ${
            recipe.prepartionTime
          }</li>
          <li><span class="text-bolder">Cooking time:</span> ${
            recipe.cookingTime
          }</li>
          <li><span class="text-bolder">Servings:</span>${recipe.servings}</li>
          <li><span class="text-bolder">Categiry:</span>${recipe.category}</li>
          <li><span class="text-bolder">Publisher:</span>${
            recipe.publisher
          }</li>
        </ul>
      </div>
    </div>

    <div class="recipe-view__directions">
      <h2 class="heading--tertiary">Directions</h2>
      <div class="recipe-view__directions--details">
        <ul class="list-style">
          ${recipe.directions
            .map((direc, i) => {
              return `<li class="recipe-view__directions--element"><svg class="icon icon__checkmark-outline">
            <use
              xlink:href="./src/img/sprite.svg#icon-checkmark-outline"
            ></use></svg
          ><span class="text-bolder">Step ${i + 1}:&nbsp;</span>${direc}</li>`;
            })
            .join("")}
        </ul>
      </div>
    </div>`;
    recipeDisplay.innerHTML = "";
    recipeDisplay.insertAdjacentHTML("beforeend", markup);
  } catch (err) {
    console.log(err);
  }
};

viewRecipe.addEventListener("click", function () {
  recipeDisplay.style.display = "block";
  loadRecipe("http://192.168.4.10:8300/recipes/where?id=6");
});

modalView.addEventListener("click", function (e) {
  if (e.target && e.target.id === "closeModal")
    recipeDisplay.style.display = "none";
});
