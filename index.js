const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-items");

mobileNav.addEventListener("click", () => {
  burger.classList.toggle("open");
  close.classList.toggle("open");
  nav.classList.toggle("open");
});
