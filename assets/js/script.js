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

/**
 *** *** Parallax Effect
 */

const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", (event) => {
  for (let i = 0; i < parallaxElements.length; i++) {
    const movementX =
      (event.clientX / window.innerWidth) *
      Number(parallaxElements[i].dataset.parallaxSpeed);

    // console.log("a ", event.clientX);
    // console.log("b ", window.innerWidth);
    // console.log("c ", parallaxElements[i].dataset.parallaxSpeed);

    // console.log(movementX);
    const movementY =
      (event.clientY / window.innerHeight) *
      Number(parallaxElements[i].dataset.parallaxSpeed);

    // console.log(movementY);

    parallaxElements[i].animate(
      {
        transform: `translate(${movementX}px, ${movementY}px)`,
      },
      { duration: 500, fill: "forwards" }
    );
  }
});
