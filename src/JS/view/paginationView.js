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
    console.log(data);
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  generatePageMarkup(markup) {
    return markup;
  }
  _generateMarkup() {
    return `
    <a href="#" class="pagination__link"
      ><svg class="icon pagination__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-arrow-thin-left"
        ></use></svg
    ></a>
    ${this._data
      .map((pagEl) => {
        return pagEl;
      })
      .join("")}
    <a href="#" class="pagination__link"
      ><svg class="icon pagination__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-arrow-thin-right"
        ></use></svg
    ></a>
`;
  }
}

export default new PaginationView();
