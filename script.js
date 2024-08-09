var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const nav_btn_main = document.getElementById("nav_btn_main");
const nav_btn_project = document.getElementById("nav_btn_project");
const nav_btn_about = document.getElementById("nav_btn_about");

window.onscroll = function () {
  if (window.scrollY <= 100) {
    nav_btn_about.classList.remove("active");
    nav_btn_project.classList.remove("active");
    nav_btn_main.classList.add("active");
  }
  if (window.scrollY >= 470) {
    nav_btn_about.classList.remove("active");
    nav_btn_project.classList.add("active");
    nav_btn_main.classList.remove("active");
  }
  if (window.scrollY >= 800) {
    nav_btn_about.classList.add("active");
    nav_btn_project.classList.remove("active");
    nav_btn_main.classList.remove("active");
  }
};
const burgerMenu = document.getElementById("burgerMenu");
const mobile = document.getElementById("mobile");
const burgerMenuActive = document.getElementById("burgerMenuActive");
const nav_btn = document.getElementsByClassName("nav_btn");

function mobileMenu() {
  burgerMenu.classList.toggle("hide");
  mobile.classList.toggle("hide");
}

burgerMenu.addEventListener("click", mobileMenu);
burgerMenuActive.addEventListener("click", mobileMenu);
