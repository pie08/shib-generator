const generateBtn = document.querySelector(".img-box__btn");

class View {
  _parentElement = document.querySelector(".img-box__image");

  render = function (pictureUrl) {
    const img = this._parentElement;
    this._parentElement.style.opacity = 0;
    const downloadingImage = new Image();
    downloadingImage.onload = function () {
      img.src = this.src;
      img.style.opacity = 1;
    };
    downloadingImage.src = pictureUrl;
  };

  _generateMarkup = function (url) {
    return `
    <img src="${url}" class="img-box__image" />
    `;
  };

  addHandlerLoad = function (handler) {
    window.addEventListener("load", handler);
  };

  addHandlerRegenerate = function (handler) {
    generateBtn.addEventListener("click", handler);
  };
}

export default new View();
