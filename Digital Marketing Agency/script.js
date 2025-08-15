
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-fill" : "ri-menu-fill");
});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-fill")
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".header_content .section_discription", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".service_btn", {
    ...scrollRevealOption,
    delay: 2000,
})

ScrollReveal().reveal(".about_container .section_header", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".about_list li", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
})

ScrollReveal().reveal(".portfolio_container .section_header", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".portfolio_container .section_description", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".portfolio_image", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
})

ScrollReveal().reveal(".portfolio_list li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

ScrollReveal().reveal(".feedback_container .section_header", {
    ...scrollRevealOption,
    delay: 500,
});


const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
});

ScrollReveal().reveal(".subscribe_content .section_header", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".subscribe_content form", {
    ...scrollRevealOption,
    delay: 500,
});