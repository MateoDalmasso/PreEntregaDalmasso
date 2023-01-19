class Juego {
    constructor(entrada) {
        this.precio = parseFloat(entrada.precio)
        this.pais = entrada.pais

    }

    calcularivaArg() {
        totalconimpuestos= total * 1.75;
        alert('Su total es ' + totalconimpuestos)
        }
    

    calcularivachile() {
        totalconimpuestos= total * 1.19;
        alert('Su total es ' + totalconimpuestos)
    }


        
    

    calcularivaUy() {
        totalconimpuestos= total * 1.21;
        alert('Su total es ' + totalconimpuestos)

    }
}


let pais 
let precio 
const Carrito = []

while(precio !== 0){
    precio = parseFloat( prompt('Ingrese el precio del producto. Para finalizar ponga 0'))
    if (precio !== 0){
        Carrito.push(precio)
    }
}


let total = 0
for(let i of Carrito) {total +=i}
console.log(total)

pais=prompt('Ingrese Argentina, Chile o Uruguay')

if (pais === 'Argentina') {
    calcularivaArg(total)
}


else if (pais === 'Chile') {
    calcularivachile(total)
}


else if (pais === 'Uruguay') {
    calcularivaUy(total)
}