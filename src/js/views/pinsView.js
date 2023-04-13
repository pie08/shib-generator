class pinsView {
  _baseElement = document.querySelector(".pins");
  _parentElement = document.querySelector(".pins__list");
  _btnNavOpenPin = document.querySelector(".navigation__btn-pinned");
  _btnClosePins = document.querySelector(".pins__btn-close");
  _btnAddPin = document.querySelector(".img-box__btn-pin");

  render = function (data) {
    console.log(this._parentElement);
    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  _clear = function () {
    this._parentElement.innerHTML = "";
  };

  _generateMarkup = function () {
    return this._data
      .map((pin, i) => {
        return `
          <li class="pins__item" data-img=${pin}>
            <a href="#" class="pins__link">
              <div class="pins__shape">
                <img
                  src="${pin}"
                  alt="Dog"
                  class="pins__preview"
                />
              </div>
              <p class="pins__text">Pinned image ${i + 1}</p>
            </a>
          </li>
      `;
      })
      .join("");
  };

  _openPins = function () {
    document.querySelector(".pins").classList.add("open");
    document.querySelector(".navigation").classList.toggle("open");
  };

  _closePins = function () {
    document.querySelector(".pins").classList.remove("open");
  };

  addHandlerAddPin = function (handler) {
    this._btnAddPin.addEventListener("click", function (e) {
      const btn = e.target.closest(".img-box__btn-pin");
      if (btn) handler();
    });
  };

  addHandlerLoadPin = function (handler) {
    document
      .querySelector(".pins__list")
      .addEventListener("click", function (e) {
        const btn = e.target.closest(".pins__item");
        if (btn) handler(btn.dataset.img);
      });
  };

  addListenerOpenPins = function () {
    this._btnNavOpenPin.addEventListener("click", this._openPins);
  };

  addListenerClosePins = function () {
    this._btnClosePins.addEventListener("click", this._closePins);
  };
}

export default new pinsView();
