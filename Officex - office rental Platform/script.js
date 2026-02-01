
const swiper = new Swiper(".swiper", {
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    watchOverflow: true,

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        540: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        769: {
            slidesPerView: 3,
            spaceBetween: 60,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 140,
        },

    },
});