import regeneratorRuntime from "regenerator-runtime";
import View from "./view.js";
import { URL } from "../config.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _paginationBox = document.querySelector(".pagination__number");
  _body = document.getElementsByTagName("body")[0];

  ///////////HIGHLIGHTS PAGE 1//////////////////////////////////////////////
  renderView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    console.log(data);
    this._generateMarkup();
    console.log(this._generateMarkup());
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
    //highlight first page
    this.toggleActivePage("1"); 
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
