//слайдер "Наши КЛИЕНТЫ"

export const initClientSlider = () => {
    const clients = document.querySelector('.clients');
    if (clients) {
        const swiper = new Swiper('.clients-swiper', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1,
            breakpoints: {
                580: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: true,
                },

                1023: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
