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

const getContent = (formValue) => {

    return `<div style=" display: flex; justify-content: center; align-items: center; background: rgb(243,243,243); background: radial-gradient(circle, rgba(243,243,243,1) 50%, rgba(163,163,163,1) 100%); ">
        <div style=" min-width: 40rem; background: #ffffff; padding: 3rem; font-size: 1.2rem; margin: 15rem; border: 1px solid #ededed; box-shadow: 0px 3px 5px 1px #d3d3d3;">
            <h3 style="padding: 1.5rem 0;">${formValue.name}</h3>
            <ul style=" list-style: none; margin-bottom: 0; padding-inline-start: 0;">
                <li style="padding: 0.8rem 0;">
                    <span style="min-width: 130px;display: inline-block;">
                        <strong>Number:</strong>
                    </span>
                    <span>${formValue.number}</span>
                </li>
                
                <li style="padding: 0.8rem 0;">
                    <span style="min-width: 130px; display: inline-block; ">
                        <strong>Email:</strong>
                    </span>
                    <span>${formValue.email}</span>
                </li>

                <li style="padding: 0.8rem 0;">
                    <span style="min-width: 130px; display: inline-block;">
                        <strong>Message:</strong>
                    </span>
                    <span>${formValue.message}</span>
                </li>
            </ul>    
        </div>
    </div>`;
};

const submitInquiryForm = () => {
    const form = document.getElementById("contact-form");

    if (!form.checkValidity()) {
        alert("Please fill up Mendatory data...!")
    }


    const formValueObj = new FormData(form);
    const formValue = Object.fromEntries(formValueObj);
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dev.himesh512@gmail.com",
        Password: "8981113356BFAE827B78880583FA09CC01AC",
        To: 'info@skydocktech.com',
        From: "dev.himesh512@gmail.com",
        Subject: `New Inquiry ${formValue.number} `,
        Body: getContent(formValue)
    }).then((message) => {
        // message => alert(message)
        let container$ = document.getElementsByClassName('contact-content');
        if (message === "OK") {
            let successText$ = container$[0].getElementsByClassName('success-text')[0];
            successText$.style.display = 'block';
            setTimeout(() => {
                successText$.style.display = 'none';
            }, 4500);
            form.reset();
        } else {
            let errorText$ = container$[0].getElementsByClassName('error-text')[0];
            errorText$.style.display = 'block';
            errorText$.innerText = message;
            setTimeout(() => {
                errorText$.style.display = 'none';
                errorText$.innerText = 'Error occurred for sent Inquiry, Please try again';
            }, 4500);
        }
    });
};


const submitBtn = document.getElementById('send-message-btn');
submitBtn.addEventListener("click", () => submitInquiryForm());