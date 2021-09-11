export class View {
  body = document.querySelector("body"); //set properties for the resulting object
  parentEl = document.querySelector("main");

  render() {
    this.#removeSections();
    this.#insertSections();
    this.#updateUrl();
  }
  #removeSections() {
    this.parentEl.innerHTML = "";
  }

  #insertSections() {
    this.parentEl.insertAdjacentHTML("afterbegin", this.generateMarkup());
  }

  selectDOMEl(name) {
    return document.querySelector(name);
  }
  selectDOMEls(name) {
    return document.querySelectorAll(name);
  }

  addHandler(el, handler, key) {
    el.addEventListener("click", handler.bind(key));
  }
  addHandlers(nodeList, handler, key) {
    nodeList.forEach((el) => el.addEventListener("click", handler.bind(key)));
  }

  mainBtnHandlers(handlers) {
    const btnsArray = [".order-button", ".menu-button", ".more-info-button"];

    this.body.addEventListener("click", function (e) {
      btnsArray.forEach((btn, i) => {
        if (e.target?.closest(btn)) handlers[i]();
      });
    });
  }

  scrollTop() {
    scrollTo(0, 0);
  }

  #updateUrl() {
    window.location.hash = this.name;
  }
}

export const viewInstance = new View();