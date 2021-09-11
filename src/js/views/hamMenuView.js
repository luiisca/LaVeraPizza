import * as View from  './View.js';

class hamMenuView extends View.View {
  overlay = document.querySelector('.overlay');

  addHandlerCloseHamMenu() {
    this.body.addEventListener('click', function(e) {
      if (e.target === this.overlay || e.target.closest('.nav-container')) {
        this.body.classList.remove('nav-open');
      }
    }.bind(new hamMenuView))
  }
}
export default new hamMenuView();
