
const swiper = new Swiper(".swiper", {
    slidesPerView:1,
    spaceBetween:10,
    loop:true,
    // watchOverflow: true,

    breakpoints: {

        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
            // when window width is >= 768px (Medium devices)
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
            // when window width is >= 992px (Large devices)
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
            // when window width is >= 1200px (Extra large devices)
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

    },
});