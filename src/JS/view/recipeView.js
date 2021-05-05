import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";

class RecipeView extends View {
  _parentEl = document.querySelector(".recipe-view");
  _viewRecipeBtn = document.querySelector(".recipe__card--btn");

  addOpenRecipeHandler(handler) {
    this._viewRecipeBtn.addEventListener("click", function () {
      ///////the this_.parent will point to the btn. CHANGE IT
      document.querySelector(".recipe-view").style.display = "block";
      handler("http://192.168.4.10:8300/recipes/where?id=57");
    });
  }

  closeRecipeView() {
    this._parentEl.addEventListener("click", function (e) {
      if (e.target && e.target.id === "closeModal")
        ///////the this_.parent will point to the btn. CHANGE IT
        document.querySelector(".recipe-view").style.display = "none";
    });
  }

  renderView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  _generateMarkup() {
    return `<svg class="icon icon__close-view icon__close-outline" id="closeModal">
    <use
      xlink:href="./src/img/icons.svg#icon-close-outline"
    ></use></svg>
<h1 class=" heading--secondary">${this._data.title}</h1>
<div class="recipe-view__info">
<div class="recipe-view__ingredients">
  <h2 class="heading--tertiary">Ingredients</h2>
  
  <div class="recipe-view__ingredients--details">
    <ul class="list-style">
    ${this._data.ingredients
      .map((ing) => {
        return `<li><svg class="icon icon__cheveron-right">
      <use
        xlink:href="./src/img/icons.svg#icon-cheveron-right"
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
      xlink:href="./src/img/icons.svg#icon-file-text"
    ></use></svg
  >
  <ul class="list-style">
    <li><span class="text-bolder">Preparation time:</span> ${
      this._data.prepartionTime
    }</li>
    <li><span class="text-bolder">Cooking time:</span> ${
      this._data.cookingTime
    }</li>
    <li><span class="text-bolder">Servings:</span> ${this._data.servings}</li>
    <li><span class="text-bolder">Category:</span> ${this._data.category}</li>
    <li><span class="text-bolder">Publisher:</span> ${this._data.publisher}</li>
  </ul>
</div>
</div>

<div class="recipe-view__directions">
<h2 class="heading--tertiary">Directions</h2>
<div class="recipe-view__directions--details">
  <ul class="list-style">
    ${this._data.directions
      .map((direc, i) => {
        return `<li class="recipe-view__directions--element"><svg class="icon icon__checkmark-outline">
      <use
        xlink:href="./src/img/icons.svg#icon-checkmark-outline"
      ></use></svg
    ><span class="text-bolder">Step ${i + 1}:&nbsp;</span>${direc}</li>`;
      })
      .join("")}
  </ul>
</div>
</div>`;
  }
}

export default new RecipeView();
