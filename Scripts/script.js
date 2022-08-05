"use strict"

const navToggle = document.querySelector('.navtoggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});