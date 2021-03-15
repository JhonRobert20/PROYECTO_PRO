document.addEventListener('DOMContentLoaded', function() {
    burger();
});

function burger() {

    /* Seleccionarla */
    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('#menu');

    /* Evento */
    burger.addEventListener('click', function() {
        /* Evento */
        menu.classList.toggle('mostrar');
        burger.classList.toggle('activo');
    });
}
