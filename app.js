
const grande = document.querySelector('.grande')
const flechas = document.querySelectorAll('.flecha')

flechas.forEach( (cadaPunto, i) => {
    punto[i].addEventListener('click', () => {

        let posicion = i
        let porcentaje = -(100 / 7)
        let porcentajeImagen = posicion * porcentaje

        grande.style.transform = `translateX(${porcentajeImagen})`
    })
})