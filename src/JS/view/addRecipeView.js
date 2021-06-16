import View from "./view.js";
import { URL } from "../config.js";

class AddRecipeView extends View {
  _imageFile = [];
  _body = document.getElementsByTagName("body")[0];
  _addRecipeBtn = document.querySelector(".nav__add-recipe--btn");
  _modal = document.querySelector(".modal-view");
  _parentEl = document.querySelector(".add-recipe-view");
  _form = document.querySelector(".add-recipe-view__form");
  _closeForm = document.querySelector(".icon__close-form");
  _addRecipeMenuBtn = document.querySelector(".addrecipe");
  _failAddRecipeBtn = document.querySelector(".sub-message__btn");
  _viewMenu = document.querySelector(".menu-section");
  _successMessage = "Your recipe has been posted successfully!";
  _failMessage = "Something went wrong, please try again later!";
  _editID;

  constructor() {
    super();
    this._openAddRecipeView();
    this._closeAddRecipeView();
    this._closeErrMsgModal();
  }

  showForm(e) {
    if (
      e.target !== this._addRecipeBtn &&
      e.target !== this._addRecipeMenuBtn
    ) {
      return;
    }
    this._viewMenu.style.display = "none";
    this.showModalView();
  }

  _openAddRecipeView() {
    this._body.addEventListener("click", this.showForm.bind(this));
  }

  _closeAddRecipeView() {
    [this._closeForm, this._modal].forEach((item) => {
      item.addEventListener(
        "click",
        function () {
          console.log(item);
          this.hideModalView();
        }.bind(this)
      );
    });
  }

  extractImageFile(formDataArr) {
    console.log(formDataArr);
    const imageFile = formDataArr.filter((item) => item[0] === "file");
    console.log(imageFile);
    this._imageFile = imageFile;
    console.log(this._imageFile);
  }

  addFormEventHandler(handler) {
    var self = this;
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log(this._editID);
      const dataArr = [...new FormData(this)];
      console.log(dataArr);
      self.extractImageFile(dataArr);
      const postData = dataArr.filter(
        (pair) => pair[0] !== "file" || !(pair[0] === "id" && pair[1] === "")
      );
      console.log(postData);
      // const postData2 = postData.filter(
      //   (pair) => !(pair[0] === "id" && pair[1] === "")
      // );
      console.log(postData);
      const data = Object.fromEntries(postData);
      console.log(data);
      this.reset();
      handler(URL, data);
    });
  }
}

export default new AddRecipeView();
