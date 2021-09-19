"use strict";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "../css/OverlayScrollbars.css";
import updateBtns from "./helpers.js";
import * as model from "./model.js";
import aboutView from "./views/aboutView.js";
import hamMenuView from "./views/hamMenuView.js";
import homeView from "./views/homeView.js";
import menuView from "./views/menuView.js";
import orderView from "./views/orderView.js";
import * as View from "./views/View.js";

// if (module.hot) {
//   module.hot.accept();
// }

const animateScroll = function () {
  logDebounce("debounced");

  const scrollElem = document.querySelector(".pizza-rotating");

  scrollValues.push(
    View.viewInstance.changeScrollBarTheme("light").scroll().position.y
  );

  const elRect = scrollElem.getBoundingClientRect();
  const elMiddHeight = elRect.height / 2;
  const newTop = elRect.y + elMiddHeight;
  const rotationPerPixel = 5 / elMiddHeight;
  const scrolledAmountSubstractionGuard = function () {
    let scrolledAmount = 1;
    if (scrollValues.length >= 2) {
      scrolledAmount =
        scrollValues[scrollValues.length - 1] -
        scrollValues[scrollValues.length - 2];
    }
    return scrolledAmount;
  };

  if (scrollValues.length > 2) scrollValues.splice(0, 1);

  if (
    (newTop <= window.innerHeight && newTop > 0) ||
    (elRect.bottom <= window.innerHeight && elRect.bottom > 0)
  ) {
    const totalRotation = scrolledAmountSubstractionGuard() * rotationPerPixel;
    accRotation += -totalRotation;
    const scrolElemAnimation = scrollElem.animate(
      [{ transform: `rotate(${accRotation}deg)` }],
      {
        duration: 1000,
        iterations: 1,
        easing: "ease",
        // iterationComposite: "accumulate",
        fill: "forwards",
      }
    );
    if (accRotation < -22 || accRotation > 14) {
      scrolElemAnimation.pause();
      accRotation = -21;
    }
  }
};

const controlHomeView = function () {
  model.state.onView = true;
  homeView.render();
  View.viewInstance.changeScrollBarTheme("light").scroll({ y: "0" });
  document.addEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
  View.viewInstance.addScrollToTopBtn();
};

const controlOrderView = async function () {
  model.state.onView = true;
  try {
    document.removeEventListener(
      "scroll",
      animateScroll,
      {
        capture: true,
        pasive: true,
      },
      false
    );
    orderView.render();
    updateBtns.updateLogoBtn(controlHomeView);
    model.state.mapEl = View.viewInstance.selectDOMEl("#map");
    model.state.popupContent = View.viewInstance.selectDOMEl("#content");
    model.state.mapsCarIcon = document.querySelector(".carIconHidden");
    await model.initMap();
    model.state.mapsCarIcon.classList.add("carIconVisible");
    orderView.newOrderSectionBottom();

    View.viewInstance.changeScrollBarTheme("dark").scroll({ y: "0" });
  } catch (err) {
    console.error(err, "controlOrderView");
  }
  // View.viewInstance.addScrollToTopBtn();
};

const controlMenuView = function () {
  document.removeEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
  model.state.onView = true;
  // View.viewInstance.scrollTop();
  menuView.render();
  updateBtns.updateLogoBtn(controlHomeView);

  View.viewInstance.changeScrollBarTheme("light").scroll({ y: "0" });

  View.viewInstance.addScrollToTopBtn();
};

const controlAboutView = function () {
  document.removeEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
  model.state.onView = true;
  aboutView.render();
  View.viewInstance.changeScrollBarTheme("light").scroll({ y: "0" });
  // View.viewInstance.scrollTop(View.viewInstance.changeScrollBarTheme("dark"));
  updateBtns.updateLogoBtn(controlHomeView);
  // View.viewInstance.changeScrollBarTheme("light");

  View.viewInstance.addScrollToTopBtn();
};

const controlViews = [controlOrderView, controlMenuView, controlAboutView];

const init = function () {
  model.state.onView = true;
  View.viewInstance.mainBtnHandlers(controlViews);
  hamMenuView.addHandlerCloseHamMenu();
};
init();

// Rotate pizza feature
const scrollValues = [];
let accRotation = 0;

const debounce = function (fn) {
  // Setup a timer
  let timeout;

  // Return a function to run debounced
  return function () {
    // Setup the arguments
    const context = this;
    const args = arguments;

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args);
    });
  };
};

const logDebounce = debounce(function (msg) {
  console.log(msg);
});

// render on load and haschange feature
const views = new Map([
  [controlOrderView, "order"],
  [controlMenuView, "menu"],
  [controlAboutView, "about"],
  [controlHomeView, "home"],
]);
console.log(model.state.onView);

const loopViews = function () {
  if (model.state.onView) return;
  const id = window.location.hash.slice(1);
  views.forEach((key, fn) => {
    // Smart URL feature
    //push all the elements on the user's array
    //make a new array with only the repetited elements
    //make it string and compare with the key, if are equal, load the related controlView function

    if (key === id) fn();
    if (id === "") controlHomeView();
  });
};
// window.addEventListener("hashchange", () => loopViews());
window.addEventListener("load", () => {
  model.state.onView = false;
  loopViews();
});
