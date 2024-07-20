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
  let h = document.documentElement.clientHeight;
  console.log(window.scrollY);
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
