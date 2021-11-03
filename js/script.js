"use strict";
// Variables
const gallery = document.querySelectorAll(".gallery-item");
const blueItem = document.querySelectorAll(".blue");
const redItem = document.querySelectorAll(".red");
const yellowItem = document.querySelectorAll(".yellow");
const purpleItem = document.querySelectorAll(".purple");
// Variables for filter buttons
const btnAll = document.querySelector(".all");
const btnBlue = document.querySelector(".btn-primary");
const btnRed = document.querySelector(".btn-danger");
const btnYellow = document.querySelector(".btn-warning");
const btnPurple = document.querySelector(".btn-secondary");

const showBlue = function () {
  for (const galleryItem of gallery) {
    if (galleryItem.classList.contains("blue")) {
      galleryItem.style.display = "block";
    } else {
      galleryItem.style.display = "none";
    }
  }
};
const showRed = function () {
  for (const galleryItem of gallery) {
    if (galleryItem.classList.contains("red")) {
      galleryItem.style.display = "block";
    } else {
      galleryItem.style.display = "none";
    }
  }
};
const showYellow = function () {
  for (const galleryItem of gallery) {
    if (galleryItem.classList.contains("yellow")) {
      galleryItem.style.display = "block";
    } else {
      galleryItem.style.display = "none";
    }
  }
};
const showPurple = function () {
  for (const galleryItem of gallery) {
    if (galleryItem.classList.contains("purple")) {
      galleryItem.style.display = "block";
    } else {
      galleryItem.style.display = "none";
    }
  }
};
const showAll = function () {
  for (const galleryItem of gallery) galleryItem.style.display = "block";
};

btnAll.addEventListener("click", showAll);
btnBlue.addEventListener("click", showBlue);
btnRed.addEventListener("click", showRed);
btnYellow.addEventListener("click", showYellow);
btnPurple.addEventListener("click", showPurple);
