export default class View {
  _data;

  renderSpinner() {
    const spinnerMarkup = `<div class="spinner">
      <svg class="spinner__icon">
        <use xlink:href="./src/img/icons.svg#icon-spinner3"></use>
      </svg>
    </div>`;
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("beforeend", spinnerMarkup);
  }

  showModalView() {
    this._parentEl.style.display = "block";
    //prevent body scroll
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  }

  hideModalView() {
    this._parentEl.style.display = "none";
    //reactivate body scroll
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }

  renderResultsView(data, pageNum) {
    this._parentEl.innerHTML = "";
    this._data = data;
    this._data.forEach((result) => {
      this._parentEl.insertAdjacentHTML(
        "afterbegin",
        this._generateMarkup(result)
      );
    });
    this._resultsHeading.textContent = `${this._titleView}`;
    if (pageNum) {
      this._toggleActivePage(pageNum);
    }
  }

  _toggleActivePage(pageNum) {
    const allPageBoxes = document.querySelectorAll("#pagination-number");
    allPageBoxes.forEach((el) => {
      el.classList.remove("active");
    });
    const pageNumBox = document.querySelector(`[data-pg="${pageNum}"]`);
    pageNumBox.classList.add("active");
  }

  _setRecipePageID(handler, e) {
    const targetEl = e.target.closest(".pagination__link");
    console.log(targetEl);
    if (targetEl) {
      const pageNum = targetEl.dataset.pg;
      console.log(pageNum);
      handler(pageNum);
    }
  }

  togglePageView(handler) {
    this._parentEl.addEventListener(
      "click",
      this._setRecipePageID.bind(this, handler)
    );
  }

  renderSuccessMessage() {
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML(
      "beforeend",
      this._generateSuccessMarkup()
    );
  }

  closeSuccessMessage() {
    this._parentEl.style.display = "none";
  }

  _generateSuccessMarkup() {
    return `
    <div class="sub-message">
    <p class="sub-message__msg">
      <svg class="icon sub-message__icon">
        <use
          xlink:href="./src/img/icons.svg#icon-checkmark-outline"
        ></use>
      </svg>
      ${this._successMessage}
    </p>
  </div>
    </div>
    `;
  }

  _generateMarkup(result) {
    return `<div class="recipe__card">
    <img
      src="./src/img/pizza.jpg"
      class="recipe__card--img"
      alt="recipe img"
    />
    <div class="recipe__card--icons">
    <svg class="icon-heart recipe__card--icon recipe__card--icon-heart ${
      result.favourites ? "filled-icon" : "empty-icon"
    }" data-id="${result.id}">
      <use xlink:href="./src/img/icons.svg#icon-heart"></use>
    </svg>
    <svg class="icon-star recipe__card--icon recipe__card--icon-star  ${
      result.featured ? "filled-icon" : "empty-icon"
    }" data-id="${result.id}">
      <use xlink:href="./src/img/icons.svg#icon-star-full"></use>
    </svg>
    </div>
    <svg id="three-dots" class="icon icon-delete recipe__card--icon recipe__card--icon-delete">
      <use xlink:href="./src/img/icons.svg#icon-dots-three-vertical"></use>
    </svg>
    
    <h3 class="recipe__card--title heading--tertiary">${result.title}</h3>
    <div class="recipe__card--back">
    <div id="options-list" class="hidden">
    <ul class="recipe__card--options">
    <li class="recipe__card--btn-options recipe__card--btn-options-delete" id="btn-delete" data-id="${
      result.id
    }">Delete Recipe</li>
    <li class="recipe__card--btn-options recipe__card--btn-edit">Edit Recipe</li>
    </ul>
    </div>
    
    <div id="btn-view" data-id="${result.id}">
    <button class="btn recipe__card--btn hidden"><span class="underline">View Recipe &rarr;</span></button>
    </div>
      
    </div>
    </div>`;
  }
}

// hideForm(e) {
//   if (
//     e.target.matches(".icon__close-form") ||
//     !e.target.closest(".modal-view")
//   )
//     this.hideModalView();
// }

// _closeAddRecipeView() {
//   this._body.addEventListener("click", this.hideForm.bind(this));
// }
