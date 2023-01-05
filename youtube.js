"use strict";
const menus = document.getElementById("menu"),
  asides = document.getElementById("aside");

menus.addEventListener("click", () => {
  asides.classList.toggle("deploy");
});

const expand = document.getElementById("expand-more");
const clicks = document.getElementsByClassName("hidden");

expand.addEventListener("click", () => {
  for (const touch of clicks) {
    touch.style.display = "block";
  }
});
