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
}

export default new SearchRecipeView();
