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

  hideModalView() {
    this._parentEl.style.display = "none";
    //reactivate body scroll
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }

  showModalView() {
    this._parentEl.style.display = "block";
    //prevent body scroll
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  }
}
