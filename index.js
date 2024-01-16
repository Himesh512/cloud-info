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


$(window).on("scroll", function (event) {
    const screenHeight = window.screen.height - 200;
    if ($(window).scrollTop() > screenHeight) {
        $(".header").addClass("scrolled");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("scrolled");
    }
});

const getContent = (formData) => {
    return "Testing";
};

const submitInquiryForm = () => {
    const formData = document.getElementById("contact-form");

    if (!formData.checkValidity()) {
        alert("Please fill up Mendatory data...!")
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@skydocktech.com",
        Password: "BBBE45B950A1DF19A682ABAA8AFC7287CBF6",
        To: 'info@skydocktech.com',
        From: "query@skydocktech.com",
        Subject: "New Inquiry",
        Body: getContent(formData)
    }).then(
        message => alert(message)
    );
};


const submitBtn = document.getElementById('send-message-btn');
submitBtn.addEventListener("click", () => submitInquiryForm());