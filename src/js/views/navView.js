class navView {
  parentElement = document.querySelector(".navigation");
  btnNav = document.querySelector(".navigation__button");

  _toggleNav = function () {
    this.parentElement.classList.toggle("open");
  };

  closeNav = function () {
    this.parentElement.classList.remove("open");
  };

  addListenerOpenNav = function () {
    this.btnNav.addEventListener("click", this._toggleNav);
  };
}

export default new navView();
