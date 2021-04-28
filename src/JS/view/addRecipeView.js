import regeneratorRuntime from "regenerator-runtime";

const AddRecipeView = class {
  _parentEl = document.querySelector(".add-recipe-view__form");

  addFormEventHandler(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      const form = document.querySelector(".add-recipe-view__form");
      e.preventDefault();
      const dataArr = [...new FormData(form)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      this.reset();
      handler("http://192.168.4.10:8300/recipes", data);
    });
  }

  renderRecipeView() {
    this._parentEl.innerHTML = "";
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  _generateMarkup() {
    return `<svg class="icon">
    <use
      xlink:href="./src/img/icons.svg#icon-checkmark-outline"
    ></use></svg>
<p class=" heading--secondary">Your recipe has been posted successfully! You can now search for it and view it anytime</p>`;
  }
};

export default new AddRecipeView();
