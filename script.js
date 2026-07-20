console.log("Script Loaded Successfully");

/*====================================
        MOBILE MENU
=====================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


/*====================================
      CLOSE MENU AFTER CLICK
=====================================*/

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});


/*====================================
      STICKY HEADER EFFECT
=====================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#0b1120";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }else{

        header.style.background = "rgba(15,23,42,.8)";
        header.style.boxShadow = "none";

    }

});




/*====================================
        TYPING EFFECT
=====================================*/

const typingText = document.querySelector(".typing");

if (typingText) {

    const words = [
        "Frontend Developer",
        "WordPress Developer",
        "WooCommerce Expert",
        "Web Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (isDeleting) {

            typingText.textContent = currentWord.substring(0, charIndex--);

        } else {

            typingText.textContent = currentWord.substring(0, charIndex++);

        }

        let typingSpeed = isDeleting ? 70 : 120;

        if (!isDeleting && charIndex === currentWord.length + 1) {

            isDeleting = true;
            typingSpeed = 1500;

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;

        }

        setTimeout(typeEffect, typingSpeed);

    }

    typeEffect();

}


/*====================================
      SKILL BAR ANIMATION
=====================================*/

const skills = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress-bar");

let started = false;

window.addEventListener("scroll",()=>{

    if(!skills) return;

    const sectionTop = skills.offsetTop - 300;

    if(window.scrollY >= sectionTop && !started){

        progressBars.forEach(bar=>{

            bar.style.width = bar.dataset.width;

        });

        started = true;

    }

});


/*====================================
        TESTIMONIAL SWIPER
=====================================*/

/*====================================
        TESTIMONIAL SWIPER
=====================================*/

if (document.querySelector(".testimonialSwiper") && typeof Swiper !== "undefined") {

    const swiper = new Swiper(".testimonialSwiper", {

        loop: true,

        slidesPerView: 3,

        spaceBetween: 30,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }

    });

}

/*====================================
      SCROLL TO TOP BUTTON
=====================================*/

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.classList.add("active");

    }else{

        scrollTopBtn.classList.remove("active");

    }

});


/*====================================
            FAQ
=====================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});



//==============================
// EMAIL JS
//==============================

emailjs.init("1gR41iheXxM7Uhdh9");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_b2c9myr",
        "template_w5vup5c",
        this
    )

    .then(function () {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })

    .catch(function (error) {

        alert("❌ Failed to send message.");

        console.log(error);

    });

});