import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";

class FilterView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _resultsHeading = document.querySelector(".results__heading");
  _dropdownEl = document.querySelector(".dropdown");
  _dropdownFilter = document.querySelector(".dropdown__filters");
  _dropdownBtn = document.querySelector(".dropdown__btn");
  _titleView = "Search Results";
  _body = document.getElementsByTagName("body")[0];
  _dropdownFilterEl = document.querySelector(".dropdown");
  _noResultMsg =
    "Sorry, we could not find a recipe that matches your filter search. Try selecting a different category.";

  constructor() {
    super();
    this.showDropdownFilters();
  }

  toggleDropdownFilters() {
    this._dropdownFilter.classList.toggle("scale-filters");
  }
  showDropdownFilters() {
    this._dropdownBtn.addEventListener(
      "click",
      this.toggleDropdownFilters.bind(this)
    );
  }

  openFilterSearchView(handler) {
    this._body.addEventListener("click", function (e) {
      const targetEl = e.target.closest(".dropdown__category");
      if (!targetEl) return;
      const searchQuery = document.querySelector(".search__input").value;
      console.log(`I am the searchquery PPPP ${searchQuery}`);
      const filterQuery = targetEl.textContent;
      if (searchQuery) {
        handler(searchQuery, filterQuery);
      } else {
        handler(null, filterQuery);
      }
    });
  }
}

export default new FilterView();
