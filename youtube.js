"use strict";
const menus = document.getElementById("menu"),
  asides = document.getElementById("aside");

menus.addEventListener("click", () => {
  asides.classList.toggle("deploy");
});
