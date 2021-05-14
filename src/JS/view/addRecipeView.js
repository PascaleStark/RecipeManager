import View from "./view.js";
import { URL } from "../config.js";

class AddRecipeView extends View {
  _body = document.getElementsByTagName("body")[0];
  _addRecipeBtn = document.querySelector(".nav__add-recipe--btn");
  _modal = document.querySelector(".modal-view");
  _parentEl = document.querySelector(".add-recipe-view");
  _form = document.querySelector(".add-recipe-view__form");
  _closeForm = document.querySelector(".icon__close-form");
  _menuBtn = document.querySelector(".hamburger-menu");
  _viewMenu = document.querySelector(".menu-section");
  _addRecipeMenuBtn = document.querySelector(".addrecipe");
  _closeMenu = document.querySelector(".menu-view__icon");

  constructor() {
    super();
    this._openAddRecipeView();
    this._closeAddRecipeView();
    this._openAddRecipeMenu();
    this._closeAddRecipeMenu();
  }

  showForm(e) {
    if (
      e.target !== this._addRecipeBtn &&
      e.target !== this._addRecipeMenuBtn
    ) {
      return;
    }
    this._viewMenu.style.display = "none";
    this.showModalView();
  }
  _openAddRecipeView() {
    this._body.addEventListener("click", this.showForm.bind(this));
  }

  _closeAddRecipeView() {
    this._closeForm.addEventListener("click", this.hideModalView.bind(this));
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

  addFormEventHandler(handler) {
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      this.reset();
      handler(URL, data);
    });
  }

  renderView() {
    this._parentEl.innerHTML = "";
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  _generateMarkup() {
    return `<div class="sub-message">
    <svg class="icon icon__close-outline icon__close-form">
      <use xlink:href="./src/img/icons.svg#icon-close-outline"></use>
    </svg>

    <p class="sub-message__msg">
      <svg class="icon sub-message__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-checkmark-outline"
        ></use>
      </svg>
      Your recipe has been posted successfully!
    </p>
    <div class="sub-message__img">
    <!-- https://images.app.goo.gl/csVNcPY99rLkdkKZ8 -->
      <img src="./src/img/balloon.gif" alt="hot-air-balloon" />
    </div>
  </div>`;
  }
}

export default new AddRecipeView();
