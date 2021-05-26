import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config";

class SearchRecipeView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _body = document.getElementsByTagName("body")[0];
  _resultsHeading = document.querySelector(".results__heading");
  _searchForm = document.querySelector(".search");
  _searchEl = document.querySelector(".search__input");
  _titleView = "Search Results";
  _dropdownFilterEl = document.querySelector(".dropdown");

  _showSearchRecipeView(handler, e) {
    e.preventDefault();
    document
      .querySelector(".results__heading")
      .scrollIntoView({ behavior: "smooth" });
    const query = this._searchEl.value;
    handler(query);
    // searchEl.value = "";
  }

  openSearchRecipeView(handler) {
    this._searchForm.addEventListener(
      "submit",
      this._showSearchRecipeView.bind(this, handler)
    );
  }

  renderNoResultsMsg() {
    this._resultsHeading.textContent = "Search Results";
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      this._generateNoResultMarkup()
    );
  }

  _generateNoResultMarkup() {
    return `<div class="recipe__no-result">
    <p class="recipe__no-result--msg">Sorry, we could not find a recipe that matches your search. Try searching for another recipe.</p>
    </div>`;
  }
}

export default new SearchRecipeView();
