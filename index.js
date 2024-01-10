const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
const navAnchors = document.querySelectorAll(".navbar-list a")

const toggleNavBar = () => {
    if (window.screen.availWidth < 980) {
        navHeader.classList.toggle("active");
    }
}
mobileNav.addEventListener("click", () => toggleNavBar());

navAnchors.forEach((aEl) => {
    aEl.addEventListener("click", () => toggleNavBar());
});


$(window).on("scroll", function() {
    const screenHeight = window.screen.height - 200;
    if ($(window).scrollTop() > screenHeight) {
        $(".header").addClass("scrolled");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("scrolled");
    }
});