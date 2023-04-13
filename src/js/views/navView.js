class navView {
  _parentElement = document.querySelector(".navigation");
  _btnNav = document.querySelector(".navigation__button");

  _toggleNav = function () {
    this._parentElement.classList.toggle("open");
  };

  closeNav = function () {
    this._parentElement.classList.remove("open");
  };

  addListenerOpenNav = function () {
    this._btnNav.addEventListener("click", this._toggleNav.bind(this));
  };
}

export default new navView();
