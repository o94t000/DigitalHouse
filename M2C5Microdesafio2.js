let nombre = "Daniel"
let apellido = "Fuentes"

let montoTotal = 0

function calcularPago (tipoDeHamburguesa,ingredientes){
    switch (tipoDeHamburguesa){
            case "carne a la parrilla":
                montoTotal = montoTotal + 1800
            break;
            case "pollo":
                montoTotal = montoTotal + 1500
            break;
            case "vegetariana":
                montoTotal = montoTotal + 1200
            break;
    }

    if (ingredientes.jamon)  montoTotal = montoTotal + 30
    if (ingredientes.queso)  montoTotal = montoTotal + 25
    if (ingredientes.salsaDeTomate)  montoTotal = montoTotal + 5
    if (ingredientes.mostaza)  montoTotal = montoTotal + 5
    if (ingredientes.mayonesa)  montoTotal = montoTotal + 5
    if (ingredientes.tomate)  montoTotal = montoTotal + 15
    if (ingredientes.lechuga)  montoTotal = montoTotal + 10
    if (ingredientes.cebolla)  montoTotal = montoTotal + 10

    return montoTotal;
}

let ingredientes = {
    jamon: true,
    queso: true,
    salsaDeTomate: true,
}

let resultadoFinal = calcularPago("pollo", ingredientes)

console.log(`
    Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${resultadoFinal}
`)