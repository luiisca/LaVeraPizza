"use strict";
import "core-js/stable";
import "regenerator-runtime/runtime";
import OverlayScrollbars from "overlayscrollbars";
import "../css/OverlayScrollbars.css";

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

const animateScroll = function () {
  logDebounce("debounced");

  const scrollElem = document.querySelector(".pizza-rotating");

  scrollValues.push(
    View.viewInstance.changeScrollBarTheme("light").scroll().position.y
  );

  const elRect = scrollElem.getBoundingClientRect();
  // console.log(elRect);
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
    // console.log(accRotation);
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
};

const controlOrderView = function () {
  orderView.render();
  updateBtns.updateLogoBtn(controlHomeView);
  model.initMap();
  View.viewInstance.changeScrollBarTheme("dark").scroll({ y: "0" });
  document.removeEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
};

const controlMenuView = function () {
  // View.viewInstance.scrollTop();
  menuView.render();
  updateBtns.updateLogoBtn(controlHomeView);

  View.viewInstance.changeScrollBarTheme("light").scroll({ y: "0" });
  document.removeEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
};

const controlAboutView = function () {
  aboutView.render();
  View.viewInstance.changeScrollBarTheme("light").scroll({ y: "0" });
  // View.viewInstance.scrollTop(View.viewInstance.changeScrollBarTheme("dark"));
  updateBtns.updateLogoBtn(controlHomeView);
  // View.viewInstance.changeScrollBarTheme("light");
  document.removeEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
};

const controlViews = [controlOrderView, controlMenuView, controlAboutView];
console.log(View.viewInstance, aboutView);

const init = function () {
  View.viewInstance.mainBtnHandlers(controlViews);
  hamMenuView.addHandlerCloseHamMenu();
  View.viewInstance.changeScrollBarTheme("light");

  document.addEventListener(
    "scroll",
    animateScroll,
    {
      capture: true,
      pasive: true,
    },
    false
  );
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

["load", "hashchange"].forEach((event) => {
  window.addEventListener(event, function () {
    const id = window.location.hash.slice(1);
    views.forEach((key, fn) => {
      // Smart URL feature
      //push all the elements on the user's array
      //make a new array with only the repetited elements
      //make it string and compare with the key, if are equal, load the related controlView function

      if (key === id) fn();
      console.log(id === undefined, id);
      if (id === "") controlHomeView();
    });
    // View.viewInstance.scrollTop();
  });
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// smooth scroll

// import Scrollbar from "smooth-scrollbar";

// Scrollbar.init(document.querySelector("body"), {
//   dumping: 0.08,
//   alwaysShowTracks: false,
// });
