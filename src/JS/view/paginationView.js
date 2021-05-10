import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _paginationViewBtn = document.querySelector(".pagination__link");
  _body = document.getElementsByTagName("body")[0];

  _setRecipeID(handler, e) {
    const targetEl = e.target.closest(".pagination__link");
    console.log(targetEl);
    if (targetEl) {
      const page = targetEl.dataset.id;
      handler(`${URL}/where?id=${id}`);
    }
  }

  renderView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  _generateMarkup() {
    return `<div class="pagination">
    <a href="#" class="pagination__link"
      ><svg class="icon pagination__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-arrow-thin-left"
        ></use></svg
    ></a>
    <a href="#" class="pagination__link">1</a>
    <a href="#" class="pagination__link">2</a>
    <a href="#" class="pagination__link">3</a>
    <a href="#" class="pagination__link">4</a>
    <a href="#" class="pagination__link">5</a>
    <a href="#" class="pagination__link">6</a>
    <a href="#" class="pagination__link"
      ><svg class="icon pagination__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-arrow-thin-right"
        ></use></svg
    ></a>
  </div>`;
  }
}

export default new PaginationView();
