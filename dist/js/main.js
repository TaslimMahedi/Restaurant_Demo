const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-nav__item');
const shopUnderline = document.querySelector('.shop__underline');
const aboutUnderline = document.querySelector('.about__underline');


let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    shopUnderline.classList.remove('delay');
    shopUnderline.classList.add('open');
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    aboutUnderline.classList.add('open');
    navItem.forEach(item => item.classList.add('open'));

    showMenu =true;
  }else{
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    shopUnderline.classList.remove('open');
    shopUnderline.classList.add('delay');
    aboutUnderline.classList.remove('open');
    navItem.forEach(item => item.classList.remove('open'));

    showMenu =false;
  }
}