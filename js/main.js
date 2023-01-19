alert('Para calcular sus precios ingrese su pais (Solo disponible en Argentina, Uruguay y Chile')

function impuestoArgentina(precio) {
    while (precio != 0) {
        preciototal = precio * 1.75
        alert('Su precio es: ' + preciototal)
        precio = prompt('Ingrese otro precio: ')
    }
}

function impuestoChile(precio) {
    while (precio != 0) {
        preciototal = precio * 1.19
        alert('Su precio es: ' + preciototal)
    }
}

function impuestoUruguay(precio) {
    while (precio != 0) {
        preciototal = precio * 1.22
        alert('Su precio es: ' + preciototal)
    }
}

let pais = prompt('Ingrese su pais: ')
let precio = prompt('Ingrese un precio, ponga 0 para cerrar el programa: ')


if (pais === 'Argentina') {
    impuestoArgentina(precio)
}


else if  (pais === 'Chile') {
    impuestoChile(precio)
}


else if  (pais === 'Uruguay') {
    impuestoUruguay(precio)
}
