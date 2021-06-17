import View from "./view.js";
import { URL } from "../config.js";

class AddRecipeView extends View {
  _imageFile = [];
  _body = document.getElementsByTagName("body")[0];
  _editRecipeBtn = document.querySelector(".recipe__card--btn-edit");
  _modal = document.querySelector(".modal-view");
  _parentEl = document.querySelector(".add-recipe-view");
  _form = document.querySelector(".add-recipe-view__form");
  _closeForm = document.querySelector(".icon__close-form");
  _addRecipeMenuBtn = document.querySelector(".addrecipe");
  _failAddRecipeBtn = document.querySelector(".sub-message__btn");
  _viewMenu = document.querySelector(".menu-section");
  _successMessage = "Your recipe has been edited successfully!";
  _failMessage = "Something went wrong, please try again later!";

  fillEditRecipeForm(recipeData) {
    // const recipeID = recipeData.id;
    console.log(recipeData);
    const allFields = this._form.elements;
    console.log(allFields);
    const allFieldsArr = Array.from(allFields);
    const allFieldsArr2 = allFieldsArr.filter((item) => item.id !== "file");
    console.log(allFieldsArr2);
    const dataArr = allFieldsArr2.map((item) => {
      const itemId = item.id;
      const seeItemValues = document.getElementById(itemId);
      console.log(seeItemValues);
      if (seeItemValues) {
        itemId === "ingredients" || itemId === "directions"
          ? (seeItemValues.value = recipeData[itemId].join("#"))
          : (seeItemValues.value = recipeData[itemId]);
      }
    });
  }

  _openEditForm(handler, e) {
    const targetEl = e.target.closest(".recipe__card--btn-edit");
    if (targetEl) {
      const editID = targetEl.dataset.id;
      this._viewMenu.style.display = "none";
      this.showModalView();
      handler(`${URL}/where?id=${editID}`);
    }
  }

  openEditRecipeView(handler) {
    this._body.addEventListener(
      "click",
      this._openEditForm.bind(this, handler)
    );
  }
}

export default new AddRecipeView();
