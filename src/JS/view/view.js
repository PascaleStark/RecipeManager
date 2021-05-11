export default class View {
  _data;
  _url;

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

  renderResultsView(data) {
    this._parentEl.innerHTML = "";
    this._data = data;
    this._data.forEach((result) => {
      this._parentEl.insertAdjacentHTML(
        "afterbegin",
        this._generateMarkup(result)
      );
    });
    this._resultsHeading.textContent = `${this._titleView}`;
  }

  _setRecipePageID(handler, e) {
    const targetEl = e.target.closest(".pagination__link");
    console.log(targetEl);
    if (targetEl) {
      const pageNum = targetEl.dataset.pg;
      console.log(pageNum);
      handler(`${this._url}${pageNum}`);
    }
  }

  togglePageView(handler) {
    this._body.addEventListener(
      "click",
      this._setRecipePageID.bind(this, handler)
    );
  }

  _generateMarkup(result) {
    return `<div class="recipe__card">
    <img
      src="./src/img/pizza.jpg"
      class="recipe__card--img"
      alt="recipe img"
    />
    <svg class="icon-heart recipe__card--icon  ${
      result.favourites ? "filled-icon" : "empty-icon"
    }" data-id="${result.id}">
      <use xlink:href="./src/img/icons.svg#icon-heart"></use>
    </svg>
    <svg class="icon-star recipe__card--icon-star  ${
      result.featured ? "filled-icon" : "empty-icon"
    }" data-id="${result.id}">
      <use xlink:href="./src/img/icons.svg#icon-star-full"></use>
    </svg>
    <h3 class="recipe__card--title heading--tertiary">${result.title}</h3>
    <div class="recipe__card--back" id="btn-view" data-id="${result.id}">
      <button class="btn recipe__card--btn hidden" ><span class="underline">View Recipe &rarr;</span></button>
    </div>
    </div>`;
  }
}
