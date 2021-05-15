import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class AlertView extends View {
  _parentEl = document.querySelector(".modal-view__msg");
  _deleteRecipeBtn = document.querySelector(
    ".recipe__card--btn-options-delete"
  );
  _viewRecipeBtn = document.querySelector(".recipe__card--btn");
  _body = document.getElementsByTagName("body")[0];
  _recipeContainer = document.querySelector(".recipe__container");
  _cancelBtn = document.querySelector(".modal-view__container-btn--btn-cancel");
  _yesBtn = document.querySelector(".modal-view__container-btn--btn-yes");
  _successMessage = "Your recipe has been deleted successfully!";
  _recipeOptions = document.querySelector(".recipe__card--icon-delete");
  _recipeOptionsView = document.querySelector(".recipe__card--options");

  constructor() {
    super();
    //this.showRecipeOptions();
    this.hideAlertMsg();
  }

  // showRecipeOptions() {
  //   this._recipeContainer.addEventListener(
  //     "click",
  //     this._showOptionsList.bind(this)
  //   );
  // }

  // _showOptionsList(e) {
  //   const targetEl = e.target.closest("#three-dots");
  //   console.log(targetEl);
  //   if (targetEl) {
  //     this._recipeOptionsView.classList.toggle("hidden");
  //   }
  // }

  showAlertMsg(handler) {
    this._recipeContainer.addEventListener(
      "click",
      this._openAlertMsg.bind(this, handler)
    );
  }

  _openAlertMsg(handler, e) {
    const targetEl = e.target.closest("#btn-delete");
    if (targetEl && targetEl.id === "btn-delete") {
      this.showModalView();
      const deleteID = targetEl.dataset.id;
      //   console.log(deleteID);
      handler(deleteID);
    }
  }

  hideAlertMsg() {
    this._cancelBtn.addEventListener("click", this._closeAlertMsg.bind(this));
  }

  _closeAlertMsg() {
    this.hideModalView();
  }

  deleteRecipeHandler(handler) {
    this._yesBtn.addEventListener("click", function () {
      handler();
    });
  }
}

export default new AlertView();
