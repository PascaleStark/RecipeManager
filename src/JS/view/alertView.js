import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class AlertView extends View {
  _parentEl = document.querySelector(".modal-alert");
  _deleteRecipeBtn = document.querySelector(
    ".recipe__card--btn-options-delete"
  );
  _viewRecipeBtn = document.querySelector(".recipe__card--btn");
  _body = document.getElementsByTagName("body")[0];
  _recipeContainer = document.querySelector(".recipe__container");
  _recipeView = document.querySelector(".recipe-view");

  constructor() {
    super();
    this.showAlertMsg();
  }

  showAlertMsg() {
    this._recipeContainer.addEventListener(
      "click",
      this._openAlertMsg.bind(this)
    );
  }

  _openAlertMsg(e) {
    const targetEl = e.target.closest("#btn-delete");
    if (targetEl && targetEl.id === "btn-delete") {
      this._parentEl.classList.remove("hidden");
      this._body.classList.add("blur-back");
      this._body.classList.add("my-body-noscroll-class");
    }
  }
  //   openRecipeView(handler) {
  //     this._body.addEventListener("click", this._setRecipeID.bind(this, handler));
  //   }

  //FOR THE YES BUTTON CLICK
  // _setRecipeID(handler, e) {
  //   const targetEl = e.target.closest("#btn-delete");
  //   console.log(targetEl);
  //   if (targetEl) {
  //     const id = targetEl.dataset.id;
  //     this.openAlertMsg();
  //     handler(`${URL}/where?id=${id}`);
  //   }
  // }

  //   _closeRecipeView() {
  //     const self = this;
  //     this._parentEl.addEventListener("click", function (e) {
  //       if (e.target && e.target.id === "closeModal") self.hideModalView();
  //     });
  //   }

  _generateMarkup() {
    return `<div class="modal-alert">
    <div class="modal-alert__msg">
      <p>Are you sure you want to delete this recipe?</p>
      <div class="modal-alert__container-btn">
        <button
          class="
            modal-alert__container-btn--btn
            modal-alert__container-btn--btn-cancel
          "
        >
          Cancel
        </button>
        <button
          class="
            modal-alert__container-btn--btn
            modal-alert__container-btn--btn-yes
          "
        >
          yes
        </button>
      </div>
    </div>
  </div>`;
  }
}

export default new AlertView();
