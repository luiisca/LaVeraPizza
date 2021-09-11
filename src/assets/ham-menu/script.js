const navTrigger = document.querySelector('.nav-trigger');
const body = document.querySelector('body');

const toggleNavigation = function (e) {
  e.preventDefault();
  body.classList.toggle('nav-open');
};

navTrigger.addEventListener('click', toggleNavigation);
