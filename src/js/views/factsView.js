class View {
  _data;
  _parentElement = document.querySelector(".facts-box");

  render = function (facts) {
    this._data = facts;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  _clear = function () {
    this._parentElement.innerHTML = "";
  };

  _generateMarkup = function () {
    return this._data
      .map((fact, i) => {
        return `
      <div class="facts-box__fact">
        <div class="facts-box__text">
          <h3 class="heading-tertiary u-margin-bottom-tiny">
            Dog fact ${i + 1}
          </h3>
          <p class="paragraph">
            ${fact.attributes.body}
          </p>
        </div>
      </div>
      `;
      })
      .join("");
  };

  addHandlerLoad = function (handler) {
    window.addEventListener("load", handler);
  };
}

export default new View();
