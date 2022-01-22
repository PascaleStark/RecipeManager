import regeneratorRuntime from "regenerator-runtime";
import View from "./view";
import { URL } from "../config.js";

class AllRecipesView extends View {
  _parentEl = document.querySelector(".recipe__container");
  _featuredRecipeBtn = document.querySelector(".icon-lnr-layers");
  _body = document.getElementsByTagName("body")[0];
  _titleView = "All recipes";
  _allRecipesBtn = document.querySelector(".nav__all-recipes--btn");
  _resultsHeading = document.querySelector(".results__heading");
  _dropdownFilterEl = document.querySelector(".dropdown");
  _titleView = "All recipes";

  constructor() {
    super();
  }

  openAllRecipesView(handler) {
    this._allRecipesBtn.addEventListener("click", function () {
      document
        .querySelector(".results__heading")
        .scrollIntoView({ behavior: "smooth" });
      handler();
    });
  }
}

export default new AllRecipesView();
