import { initClientSlider } from "./module/client-slider.js";
import { initMask } from "./module/mask.js";
import { initMenu } from "./module/menu.js";
import { initScroll } from "./module/scroll.js";
import { initTabs } from "./module/tabs.js";
import { initAccordions } from "./module/accordions.js";
import { initForm } from "./module/form.js";
import { initPopup } from "./module/popup.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initClientSlider();
    initMenu();
    initScroll();
    initTabs();
    initMask();
    initAccordions();
    initForm();
    initPopup();
    // DOMContentLoaded
});
