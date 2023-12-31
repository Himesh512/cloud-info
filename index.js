const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");

const toggleNavBar = () => {
    navHeader.classList.toggle("active");
}

mobileNav.addEventListener("click", () => toggleNavBar());