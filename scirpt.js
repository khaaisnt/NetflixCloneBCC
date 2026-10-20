const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".mobile-navigation");

hamburger.addEventListener("click", function () {
  navbarMenu.classList.toggle("open");
});
