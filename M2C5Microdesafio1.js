function alquilerDeUnVehiculo (tipoDeVehiculo, diasDeAlquiler, sillaParaBebe){
    let valorTotal = 0
    switch (tipoDeVehiculo){
        case "compacto":
            valorTotal = valorTotal + 14000;
        break;
        case "mediano":
            valorTotal = valorTotal + 17000;
        break;
        case "camioneta":
            valorTotal = valorTotal + 28000;
        break
    }

    if (sillaParaBebe = true || sillaParaBebe == "si") {
        valorTotal = valorTotal + 1200
    }        
    
    return valorTotal * diasDeAlquiler
}

console.log(alquilerDeUnVehiculo("compacto",2,"si"))