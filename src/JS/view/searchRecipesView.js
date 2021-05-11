import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config";

class SearchRecipeView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _body = document.getElementsByTagName("body")[0];
  _resultsHeading = document.querySelector(".results__heading");
  _searchForm = document.querySelector(".search");
  _titleView = "Search results";

  _showSearchRecipeView(handler, e) {
    const searchEl = document.querySelector(".search__input");
    e.preventDefault();
    document
      .querySelector(".results__heading")
      .scrollIntoView({ behavior: "smooth" });
    const query = searchEl.value;
    handler(`${URL}/search?q=${query}`);
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
