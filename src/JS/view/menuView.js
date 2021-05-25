import regeneratorRuntime from "regenerator-runtime";
import View from "./view";
import { URL } from "../config.js";

class MenuView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _favouriteRecipeBtn = document.querySelector(".icon-heart");
  _body = document.getElementsByTagName("body")[0];
  _titleView = "Favourites";
  _allFavouritesBtn = document.querySelector(".nav__favourites--btn");
  _allfavouritesMenuBtn = document.querySelector(
    ".menu-view__list--favourites"
  );
  _resultsHeading = document.querySelector(".results__heading");
  _viewMenu = document.querySelector(".menu-section");
  _closeMenu = document.querySelector(".menu-view__icon");
  _menuBtn = document.querySelector(".hamburger-menu");

  constructor() {
    super();
    this._openAddRecipeMenu();
    this._closeAddRecipeMenu();
  }

  showMenuView() {
    this._viewMenu.style.display = "block";
    this._body.classList.add("my-body-noscroll-class");
  }
  _openAddRecipeMenu() {
    this._menuBtn.addEventListener("click", this.showMenuView.bind(this));
  }

  hideMenuView() {
    this._viewMenu.style.display = "none";
    this._body.classList.remove("my-body-noscroll-class");
  }
  _closeAddRecipeMenu() {
    this._closeMenu.addEventListener("click", this.hideMenuView.bind(this));
  }

  openFavouritesMenuView(handler) {
    this._allfavouritesMenuBtn.addEventListener(
      "click",
      function () {
        this.hideMenuView();
        document
          .querySelector(".results__heading")
          .scrollIntoView({ behavior: "smooth" });
        handler();
      }.bind(this)
    );
  }
}
export default new MenuView();
