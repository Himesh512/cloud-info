const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
const navAnchors = document.querySelectorAll(".navbar-list a")

const toggleNavBar = () => {
    navHeader.classList.toggle("active");
}
mobileNav.addEventListener("click", () => toggleNavBar());

navAnchors.forEach((aEl) => {
    aEl.addEventListener("click", () => toggleNavBar());
});