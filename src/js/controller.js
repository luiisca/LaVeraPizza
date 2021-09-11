"use strict";
import "core-js/stable";
import "regenerator-runtime/runtime";

import homeView from "./views/homeView.js";
import orderView from "./views/orderView.js";
import menuView from "./views/menuView.js";
import aboutView from "./views/aboutView.js";
import * as View from "./views/View.js";
import updateBtns from "./helpers.js";
import * as model from "./model.js";

import hamMenuView from "./views/hamMenuView.js";

if (module.hot) {
  module.hot.accept();
}
const controlHomeView = function () {
  homeView.render();
  View.viewInstance.scrollTop();
  View.viewInstance.mainBtnHandlers();
};

const controlOrderView = function () {
  orderView.render();
  View.viewInstance.scrollTop();
  updateBtns.updateLogoBtn(controlHomeView);
  model.initMap();
};

const controlMenuView = function () {
  menuView.render();
  View.viewInstance.scrollTop();
  updateBtns.updateLogoBtn(controlHomeView);
};

const controlAboutView = function () {
  aboutView.render();
  View.viewInstance.scrollTop();
  updateBtns.updateLogoBtn(controlHomeView);
};

const controlViews = [controlOrderView, controlMenuView, controlAboutView];
console.log(View.viewInstance, aboutView);

const init = function () {
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

const animateScroll = function () {
  logDebounce("debounced");

  const scrollElem = document.querySelector(".pizza-rotating");

  scrollValues.push(window.scrollY);

  const elRect = scrollElem.getBoundingClientRect();
  const elMiddHeight = elRect.height / 2;
  const newTop = elRect.y + elMiddHeight;
  const rotationPerPixel = 6 / elMiddHeight;
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
    console.log(accRotation);
    const test = scrollElem.animate(
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
      test.pause();
      accRotation = -21;
    }
  }
};
document.addEventListener(
  "scroll",
  animateScroll,
  {
    capture: true,
    pasive: true,
  },
  false
);

window.addEventListener("hashchange", function () {
  console.log("holaHash");
  console.log(window.URL);
  id = window.location.hash.slice(1);
  console.log(id);
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// ON load identify the hash and based on that render the corresponding view.
const views = new Map([
  [controlOrderView, "order"],
  [controlMenuView, "menu"],
  [controlAboutView, "about"],
  [controlHomeView, "home"],
]);

window.addEventListener("load", function () {
  const id = window.location.hash.slice(1);
  console.log(id);
  views.forEach((key, fn) => {
    if (key === id) fn();
  });
  //compare id with name property on each view, if true then stick to that view and execute its controlView function
});
// 1 Use load eventlistener, the calback should compare the hash with some array where all the views' names are
// 2 If find some coincidence it should run the function related to it.
console.log("hola");
