// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  header.classList.toggle('active');
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  // Inside the Media Query.
  const navLink = document.querySelectorAll('.nav-link');

  navLink.forEach((n) => n.addEventListener('click', closeMenu));

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
}
