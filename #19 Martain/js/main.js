//Navigation bar effects on scroll

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
//Services section - Modal
const ServiceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  ServiceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    ServiceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

//Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCards, i) => {
  imgCards.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
//Scroll to top button
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelector(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
