export const initAccordions = () => {

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
} 