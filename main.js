const body = document.querySelector("body");
const menu = document.querySelector(".header__nav-mb");
const burgerButton = document.querySelector(".header__button-burger");
const openBurger = document.querySelector(".header__open-burger-icon");
const closeBurger = document.querySelector(".header__close-burger-icon");
burgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    openBurger.style.display = "none";
    closeBurger.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    openBurger.style.display = "block";
    closeBurger.style.display = "none";
    body.style.overflow = "auto";
  }
});
