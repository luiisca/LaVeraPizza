import * as model from "../model.js";
import OverlayScrollbars from "overlayscrollbars";
export class View {
  body = document.querySelector("body");
  parentEl = document.querySelector("main");
  rootElement = document.documentElement;
  scrollbar;

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
        else return;
      });
    });
  }

  #updateUrl() {
    window.location.hash = this.name;
  }

  // Scrollbar customization
  changeScrollBarTheme(theme) {
    model.state.scrollbar = OverlayScrollbars(document.querySelector("body"), {
      className: `os-theme-${theme}`,
      scrollbars: {
        autoHide: "scroll",
      },
    });
    return model.state.scrollbar;
  }

  // Scrolltotop Btn
  addScrollToTopBtn() {
    const scrollToTopBtn = document.querySelector(".scrollToTopButton");
    const target = document.querySelector(".footer-section");
    const callback = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) scrollToTopBtn.classList.add("showed");
        else scrollToTopBtn.classList.remove("showed");
      });
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(target);
    const scrollToTop = function () {
      model.state.scrollbar.scroll({ y: "0" });
    };
    scrollToTopBtn.addEventListener("click", scrollToTop);
  }
}

export const viewInstance = new View();
