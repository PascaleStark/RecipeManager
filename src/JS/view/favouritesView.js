import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class FavouritesView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _favouriteRecipeBtn = document.querySelector(".icon-heart");
  _body = document.getElementsByTagName("body")[0];
  _titleView = "Favourites";
  _allFavouritesBtn = document.querySelector(".nav__favorites--btn");
  _resultsHeading = document.querySelector(".results__heading");

  constructor() {
    super();
    this.setFavouriteIcon();
  }

  _setRecipeID(handler, e) {
    const targetEl = e.target.closest(".icon-heart");
    console.log(targetEl);
    if (targetEl) {
      const id = targetEl.dataset.id;
      handler(`${URL}/favourites/${id}`);
    }
  }

  toggleFavourites(handler) {
    this._body.addEventListener("click", this._setRecipeID.bind(this, handler));
  }

  _toggleHeartIcon(e) {
    const targetEl = e.target.closest(".icon-heart");
    console.log(targetEl);
    if (targetEl) {
      targetEl.classList.toggle("empty-heart");
      targetEl.classList.toggle("filled-heart");
    }
  }

  setFavouriteIcon() {
    this._body.addEventListener("click", this._toggleHeartIcon.bind(this));
  }

  openFavouritesView(handler) {
    this._allFavouritesBtn.addEventListener("click", function () {
      document
        .querySelector(".results__heading")
        .scrollIntoView({ behavior: "smooth" });
      handler();
    });
  }

  renderFavouritesView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    console.log(data);
    this._data.forEach((result) => {
      console.log(result);
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
export default new FavouritesView();
