"use strict";

/**
 ****** Add Events on Multiple Elements
 */

const addEventOnElements = (elements, eventType, callback) => {
  for (let el of elements) {
    el.addEventListener(eventType, callback);
  }
};

/**
 * *** Navbar toggle For Mobile
 */

// Elements
const navbarEl = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

// Callback
const toggleNavbar = () => {
  navbarEl.classList.toggle("active");
  overlay.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

// Making the Toggle Work
addEventOnElements([navToggleBtn, overlay], "click", toggleNavbar);
