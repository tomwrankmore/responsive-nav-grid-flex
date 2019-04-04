//Select Dom items

const menuBtn = document.querySelector(".nav-toggle-label");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  this.classList.toggle("label-active");
  nav.classList.toggle("nav-active");
}
