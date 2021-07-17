/* #Header
  ======================================================= */

// Hamburger
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');
const closeMenuBtn = document.querySelector('.header-close');
const body = document.querySelector('body');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', (e) => {
    header.classList.remove('show-menu');
    body.classList.remove('no-scroll');
  });
}