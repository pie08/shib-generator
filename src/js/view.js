const imgContainer = document.querySelector(".img-box__img-container");
const image = document.querySelector(".img-box__image");
const generateBtn = document.querySelector(".img-box__btn");

class View {
  renderPicture = function (pictureUrl) {
    image.style.opacity = 0;
    const downloadingImage = new Image();
    downloadingImage.onload = function () {
      image.src = this.src;
      image.style.opacity = 1;
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
