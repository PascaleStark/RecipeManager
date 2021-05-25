import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class ErrorView extends View {
  _parentEl = document.querySelector(".error-modal");
  _errorModalBtn = document.querySelector(".error-modal__btn");
  _body = document.getElementsByTagName("body")[0];
  _recipeView = document.querySelector(".recipe-view");
  _blurEl = document.querySelectorAll("body > *:not(.error-modal)");

  constructor() {
    super();
    this.closeErrorView();
  }

  showErrorView(err) {
    this._recipeView.innerHTML = "";
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      this._generateErrorMarkup(err)
    );
    this._parentEl.classList.remove("hidden");
    console.log(this._blurEl);
    this._blurEl.forEach((el) => el.classList.add("blur"));
  }

  _hideErrorView(e) {
    const targetEl = e.target.closest(".error-modal__btn");
    console.log(targetEl);
    if (targetEl) {
      this._parentEl.classList.add("hidden");
      location.reload();
    }
  }

  closeErrorView() {
    this._body.addEventListener("click", this._hideErrorView.bind(this));
  }

  _generateErrorMarkup(err) {
    return `
    <div class="error-modal__container">
      <h1>
        <svg class="icon error-modal__icon">
          <use xlink:href="./src/img/icons.svg#icon-warning"></use></svg
        >ERROR
      </h1>
      <p class="error-modal__msg">${err}</p>
      <button class="error-modal__btn">OK</button>
    </div>`;
  }
}

export default new ErrorView();
