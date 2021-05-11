import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _paginationViewBtn = document.querySelector(".pagination__link");
  _body = document.getElementsByTagName("body")[0];
  _url = `${URL}/where?favourites=1&page=`;

  //   _setRecipePageID(handler, e) {
  //     const targetEl = e.target.closest(".pagination__link");
  //     console.log(targetEl);
  //     if (targetEl) {
  //       const pageNum = targetEl.dataset.pg;
  //       console.log(pageNum);
  //       handler(`${this._url}${pageNum}`);
  //     }
  //   }

  //   togglePageView(handler) {
  //     this._body.addEventListener(
  //       "click",
  //       this._setRecipePageID.bind(this, handler)
  //     );
  //   }

  renderView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  _generateMarkup() {
    return `
    <div class="pagination__link"
      ><svg class="icon pagination__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-arrow-thin-left"
        ></use></svg
    ></div>
    ${this._data
      .map((pagEl) => {
        return pagEl;
      })
      .join("")}
    <div class="pagination__link"
      ><svg class="icon pagination__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-arrow-thin-right"
        ></use></svg
    ></div>
`;
  }
}

export default new PaginationView();
