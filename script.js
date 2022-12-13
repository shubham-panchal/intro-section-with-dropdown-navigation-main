"use strict";

const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const hamburgerMenuBody = document.querySelector(".hamburger-menu--body");
const overlay = document.querySelector(".overlay");
const closeMenuBtn = document.querySelector(".close-btn");

const navLinks = document.querySelectorAll(".dropdown-link");
const navLinksDesktop = document.querySelectorAll(".dropdown-link-desktop");
const featuresDropdown = document.querySelector(".features-dropdown");
const featuresDropdownDesktop = document.querySelector(
  ".features-dropdown-desktop"
);
const companyDropdown = document.querySelector(".company-dropdown");
const companyDropdownDesktop = document.querySelector(
  ".company-dropdown-desktop"
);
const dataIcon = document.querySelector("[data-icon]");

hamburgerMenuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerMenuBody.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerMenuBody.classList.add("hidden");
  overlay.classList.add("hidden");
  featuresDropdown.classList.add("hidden");
  companyDropdown.classList.add("hidden");

  navLinks.forEach((link) => {
    link.dataset.icon = "arrow-down";
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (e.target.innerHTML.toLowerCase().trim() === "features") {
      featuresDropdown.classList.toggle("hidden");
      if (!featuresDropdown.classList.contains("hidden")) {
        link.dataset.icon = "arrow-up";
      } else {
        link.dataset.icon = "arrow-down";
      }
    } else if (e.target.innerHTML.toLowerCase().trim() === "company") {
      companyDropdown.classList.toggle("hidden");
      if (!companyDropdown.classList.contains("hidden")) {
        link.dataset.icon = "arrow-up";
      } else {
        link.dataset.icon = "arrow-down";
      }
    }
  });
});

navLinksDesktop.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (e.target.innerHTML.toLowerCase().trim() === "features") {
      featuresDropdownDesktop.classList.toggle("hidden");
      if (!featuresDropdownDesktop.classList.contains("hidden")) {
        link.dataset.icon = "arrow-up";
      } else {
        link.dataset.icon = "arrow-down";
      }
    } else if (e.target.innerHTML.toLowerCase().trim() === "company") {
      companyDropdownDesktop.classList.toggle("hidden");
      if (!companyDropdownDesktop.classList.contains("hidden")) {
        link.dataset.icon = "arrow-up";
      } else {
        link.dataset.icon = "arrow-down";
      }
    }
  });
});
