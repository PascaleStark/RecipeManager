import View from "./view.js";
import { URL } from "../config.js";

class AddRecipeView extends View {
  _body = document.getElementsByTagName("body")[0];
  _addRecipeBtn = document.querySelector(".nav__add-recipe--btn");
  _modal = document.querySelector(".modal-view");
  _parentEl = document.querySelector(".add-recipe-view");
  _form = document.querySelector(".add-recipe-view__form");
  _closeForm = document.querySelector(".icon__close-form");
  _addRecipeMenuBtn = document.querySelector(".addrecipe");
  _viewMenu = document.querySelector(".menu-section");
  _successMessage = "Your recipe has been posted successfully!";
  _failMessage = "Something went wrong, please try again later!";

  constructor() {
    super();
    this._openAddRecipeView();
    this._closeAddRecipeView();
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
    [this._closeForm, this._modal].forEach((item) => {
      item.addEventListener(
        "click",
        function () {
          console.log(item);
          this.hideModalView();
        }.bind(this)
      );
    });
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
}

export default new AddRecipeView();
