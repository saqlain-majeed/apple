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
{
  /* <i class="fa-solid fa-xmark"></i> */
}

// -----------------------------------
//      ----Footer Expand Icon----
// -----------------------------------
// const firstTitleBox = document.querySelector('.title-box');
// const firstIcon = document.querySelector('.footer-icon');
// const listItems = Array.from(document.querySelector('.footer-secondary-item'));

// firstTitleBox.addEventListener('click', () => {
//   firstIcon.classList.toggle('fa-plus');
//   firstIcon.classList.toggle('fa-xmark');
// });

// -----------------------------------
//      ----Footer Expand Icon----
// -----------------------------------

var coll = document.getElementsByClassName('title-box');

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    let icon = this.querySelector('.footer-icon');
    var content = this.nextElementSibling;
    if (content.style.display === 'flex') {
      addFlexStyles(content, icon, this);
    } else {
      addNoneStyles(content, icon, this);
      // content.style.display = 'flex';
      // icon.classList.add('fa-close');
      // icon.classList.remove('fa-plus');
      // this.style.borderBottom = 'none';
    }
  });
}

const addFlexStyles = (content, icon, el) => {
  content.style.display = 'none';
  icon.classList.add('fa-plus');
  icon.classList.remove('fa-close');
  el.style.borderBottom = '1px solid #d2d2d7';
  el.style.color = '#6e6e73';
};
const addNoneStyles = (content, icon, el) => {
  content.style.display = 'flex';
  icon.classList.add('fa-close');
  icon.classList.remove('fa-plus');
  el.style.borderBottom = 'none';
  el.style.color = 'black';
};
