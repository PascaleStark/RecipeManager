import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";

class FilterView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _resultsHeading = document.querySelector(".results__heading");
  _dropdownEl = document.querySelector(".dropdown");
  _dropdownFilter = document.querySelector(".dropdown__filters");
  _dropdownBtn = document.querySelector(".dropdown__btn");
  _titleView = "Search results";
  _body = document.getElementsByTagName("body")[0];

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
      const searchEl = document.querySelector(".search__input");
      const searchQuery = document.querySelector(".search__input").value;
      const filterQuery = targetEl.textContent;
      handler(searchQuery, filterQuery);
      searchEl.value = "";
    });
  }
}

export default new FilterView();
