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
  _noResultMsg =
    "Sorry, we could not find a recipe that matches your search. Try searching for another recipe.";

    clearSearchInput() {
      this._searchEl.value = "";
    }

  _showSearchRecipeView(handler, e) {
    e.preventDefault();
    document
      .querySelector(".results__heading")
      .scrollIntoView({ behavior: "smooth" });
    const query = this._searchEl.value;
    handler(query.trimStart());
    // searchEl.value = "";
  }

  openSearchRecipeView(handler) {
    this._searchForm.addEventListener(
      "submit",
      this._showSearchRecipeView.bind(this, handler)
    );
  }
}

export default new SearchRecipeView();
