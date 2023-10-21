import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        modules: [Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets',
        },
        // slidesPerView: 'auto',
    });
})
