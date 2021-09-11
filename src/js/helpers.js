import orderView from './views/orderView.js';
import * as View from  './views/View.js';

class updateBtns {
  updateBtns() {
    //   controlsViews.forEach((bttn, key) => {
    //     new View().addHandler(new View().selectDOMEl(bttn), key, new View());
    //   });
    // }
  }

  updateLogoBtn(control) {
    orderView.addHandlers(orderView.selectDOMEls('.clickable-logo'), control);
  }
}

export default new updateBtns();
