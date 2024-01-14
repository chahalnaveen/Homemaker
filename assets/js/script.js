'use strict';

/**
 * Element toggle function
 */
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * Close navbar when clicking on any navbar link
 */
for (let i = 0; i < navbarLinks.length; i++) {
  navElemArr.push(navbarLinks[i]);
}

/**
 * Add event listeners to all elements for toggling navbar
 */
for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * Header active state
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  // Use a classList method for better readability
  header.classList.toggle("active", window.scrollY >= 400);
});
