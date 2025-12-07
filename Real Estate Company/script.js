
const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "left",
    duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
})

ScrollReveal().reveal("header form", {
    ...scrollRevealOption,
    delay: 500,
})
