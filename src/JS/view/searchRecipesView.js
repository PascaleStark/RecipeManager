import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";

class SearchRecipeView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _resultsHeading = document.querySelector(".results__heading");
  _searchForm = document.querySelector(".search");
  _titleView = "Search results";

  openSearchRecipeView(handler) {
    this._searchForm.addEventListener("submit", function (e) {
      const searchEl = document.querySelector(".search__input");
      e.preventDefault();
      document
        .querySelector(".results__heading")
        .scrollIntoView({ behavior: "smooth" });
      const query = searchEl.value;
      handler(query);
      searchEl.value = "";
    });
  }

  renderSearchView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    this._data.forEach((result) => {
      this._parentEl.insertAdjacentHTML(
        "afterbegin",
        this._generateMarkup(result)
      );
    });
    this._resultsHeading.textContent = `${this._titleView}`;
  }

  _generateMarkup(result) {
    return `<div class="recipe__card">
    <img
      src="./src/img/pizza.jpg"
      class="recipe__card--img"
      alt="recipe img"
    />
    <svg class="icon-heart recipe__card--icon  ${
      result.favourites === 1 ? "filled-heart" : "empty-heart"
    }" data-id="${result.id}">
      <use xlink:href="./src/img/icons.svg#icon-heart"></use>
    </svg>
    <h3 class="recipe__card--title heading--tertiary">${result.title}</h3>
    <div class="recipe__card--back" id="btn-view" data-id="${result.id}">
      <button class="btn recipe__card--btn hidden" ><span class="underline">View Recipe &rarr;</span></button>
    </div>
    </div>`;
  }
}

export default new SearchRecipeView();
