"user strict";

const burgerEl = document.getElementById("burger-button");
const menuEl = document.getElementById("menu");
const menuLinks = menuEl.querySelectorAll(":scope > .menuLink");
let menuDown = false;

burgerEl.addEventListener("click", function () {
  if (!menuDown) {
    menuEl.style.transition = "0.5s";
    menuEl.style.transform = "translateY(34.22px)";
    menuDown = true;
  } else {
    menuEl.style.transition = "0.75s";
    menuEl.style.transform = "translateY(-500px)";
    menuDown = false;
  }
});

menuLinks.forEach((tag) => {
  tag.addEventListener("click", () => {
    menuEl.style.transition = "0.5s";
    menuEl.style.transform = "translateY(-400px)";
    menuDown = false;
  });
});
