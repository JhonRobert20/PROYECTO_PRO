const grande = document.querySelector('.carrusel .grande')
const flechas = document.querySelectorAll('.flecha')
flechas.forEach( (flecha, i) => {
    flechas[i].addEventListener('click', () => {

        let posicion = i
        let porcentaje = -(100 / 7)
        let porcentajeImagen = posicion * porcentaje
        console.log(porcentajeImagen)

        grande.style.transform = `translateX(${porcentajeImagen}%)`;

        flechas.forEach( (flechaa, o) => {
            flechas[o].classList.remove('activo')
        })
        flechas[i].classList.add('activo')
    })
})