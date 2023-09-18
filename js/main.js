
window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    const body = document.querySelector('body');
    const header = document.querySelector('header');

    // Меню
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuButton = document.querySelector('.btn-close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    menuButton.addEventListener('click', e => {
        menuButton.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        body.classList.toggle('lock');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            menuButton.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            body.classList.remove('lock');
        });
    });

    //Tabs
    const tabButtons = document.querySelectorAll("._tabs-item");
    const tabs_blocks = document.querySelectorAll("._tabs-block");

    tabButtons.forEach(button => {
        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            const targetBtn = evt.currentTarget;
            const targetBtnId = targetBtn.getAttribute('data-tab');
            const currentTab = document.querySelector(targetBtnId);

            if (!targetBtn.classList.contains('_active')) {
                tabButtons.forEach(button => {
                    button.classList.remove('_active');
                    button.classList.remove('is-active');
                });

                tabs_blocks.forEach(button => {
                    button.classList.remove('_active');
                });

                targetBtn.classList.add('_active');
                targetBtn.classList.add('is-active');
                currentTab.classList.add('_active');
            }
        });
    });

    //accordions
    const accordions = document.querySelectorAll("._tabs-accordion");

    accordions.forEach(el => {
        const button = el.querySelector('._tabs-button');
        const content = el.querySelector('._tabs-content');

        button.addEventListener('click', (evt) => {
            evt.preventDefault();
            const currentButton = evt.currentTarget;

            currentButton.classList.toggle('_active');
            content.classList.toggle('_active');

            if (currentButton.classList.contains('_active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }

        });
    });

    //слайдер "Наши КЛИЕНТЫ"

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
                    slidesPerView: 2,
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

    // Плавный скролл до блока
    const menuLinks = document.querySelectorAll('.nav-link');
    if (menuLinks) {
        const onMenuLinkClick = (evt) => {
            const menuLink = evt.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - header.offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth',
                });
                evt.preventDefault();
            }
        };

        if (menuLinks.length > 0) {
            menuLinks.forEach((menuLink) => {
                menuLink.addEventListener('click', onMenuLinkClick);
            });
        }
    }

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= 50) {
            header.classList.add('shadow-filter-1');
        } else {
            header.classList.remove('shadow-filter-1');
        }
    });

    // DOMContentLoaded
});
