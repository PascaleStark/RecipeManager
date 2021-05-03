const AddRecipeView = class {
  _parentEl = document.querySelector(".add-recipe-view");

  openAddRecipeView() {
    const body = document.getElementsByTagName("body")[0];
    const viewMenu = document.querySelector(".menu-section");
    body.addEventListener("click", (event) => {
      const addRecipe = document.querySelector(".nav__add-recipe--btn");
      const menuAddRecipe = document.querySelector(".addrecipe");
      if (event.target !== addRecipe && event.target !== menuAddRecipe) {
        return;
      }
      viewMenu.style.display = "none";
      document.querySelector(".add-recipe-view").style.display = "block";
    });
  }

  closeAddRecipeView() {
    const body = document.getElementsByTagName("body")[0];
    const closeForm = document.querySelector(".icon__close-form");
    closeForm.addEventListener("click", function () {
      document.querySelector(".add-recipe-view").style.display = "none";
      body.classList.remove("my-body-noscroll-class");
    });
  }

  openAddRecipeMenu() {
    const body = document.getElementsByTagName("body")[0];
    const btnMenu = document.querySelector(".hamburger-menu");
    const viewMenu = document.querySelector(".menu-section");
    btnMenu.addEventListener("click", function () {
      viewMenu.style.display = "block";
      body.classList.add("my-body-noscroll-class");
    });
  }

  closeAddRecipeMenu() {
    const body = document.getElementsByTagName("body")[0];
    const viewMenu = document.querySelector(".menu-section");
    const closeMenu = document.querySelector(".menu-view__icon");
    closeMenu.addEventListener("click", function () {
      viewMenu.style.display = "none";
      body.classList.remove("my-body-noscroll-class");
    });
  }

  addFormEventHandler(handler) {
    const form = document.querySelector(".add-recipe-view__form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(form)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      this.reset();
      handler("http://192.168.4.10:8300/recipes", data);
    });
  }

  renderView() {
    this._parentEl.innerHTML = "";
    this._generateMarkup();
    this._parentEl.insertAdjacentHTML("beforeend", this._generateMarkup());
  }

  _generateMarkup() {
    return `<div class="sub-message">
    <svg class="icon icon__close-outline icon__close-form">
      <use xlink:href="./src/img/icons.svg#icon-close-outline"></use>
    </svg>

    <p class="sub-message__msg">
      <svg class="icon sub-message__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-checkmark-outline"
        ></use>
      </svg>
      Your recipe has been posted successfully!
    </p>
    <div class="sub-message__img">
    <!-- https://images.app.goo.gl/csVNcPY99rLkdkKZ8 -->
      <img src="./src/img/balloon.gif" alt="hot-air-balloon" />
    </div>
  </div>`;
  }
};

export default new AddRecipeView();
