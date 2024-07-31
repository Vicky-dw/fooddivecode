// Inicialización del primer swiper
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// Inicialización del segundo swiper
var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});

// Manejo de eventos para los inputs de tabulación
let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.getAttribute('aria-valuemax'); // Cambiado a getAttribute para obtener el valor correcto
        let thisSwiper = document.getElementById('swiper' + id);

        if (thisSwiper && thisSwiper.swiper) { // Verificación adicional para evitar errores
            thisSwiper.swiper.update();
        }
    });
});