//La velocidad debe estar comprendida entre 268 a 278 km/hr.
//La altura debe estar comprendida entre 150 m a 300 m.

let velocidad = 2701
let altura = 1601

let estadoVelocidad = ""
    let velocidadBaja = velocidad < 268 ? true : false
    let velocidadCorrecta = velocidad >= 268 && velocidad <= 278 ? true : false
    let velocidadAlta = velocidad > 278 ? true : false
    let diferenciaVelocidad = ""

let estadoAltura = ""
    let alturaBaja = altura < 150 ? true : false
    let alturaCorrecta = altura >= 150 && altura <= 300 ? true : false
    let alturaAlta = altura > 300 ? true : false
    let diferenciaAltura = ""


switch(velocidadBaja){
    case true:
        estadoVelocidad = "Se necesita mayor velocidad para un aterrizaje optimo."
        diferenciaVelocidad = (268 - velocidad)
    break
}

switch (velocidadCorrecta){
    case true:
        estadoVelocidad = "velocidad correcta"
    break
    }

switch (velocidadAlta){
    case true:
        estadoVelocidad = "Se necesita menor velocidad para un aterrizaje optimo."
        diferenciaVelocidad = (velocidad - 278)
    break
}

switch(alturaBaja){
    case true:
        estadoAltura = "Se necesita mayor altura para un aterrizaje optimo."
        diferenciaAltura = (150 - altura)
    break
}

switch (alturaCorrecta){
    case true:
        estadoAltura = "altura correcta"
}

switch (alturaAlta){
    case true:
        estadoAltura = "Se necesita menor altura para un aterrizaje optimo."
        diferenciaAltura = (altura - 300)
}

safeLanding = velocidadCorrecta == true && alturaCorrecta == true ? true : false
errorVelocidad = velocidadCorrecta == false && alturaCorrecta == true ? true : false
errorAltura = velocidadCorrecta == true && alturaCorrecta == false ? true : false
errorGeneral = velocidadCorrecta == false && alturaCorrecta == false ? true : false



switch(safeLanding){
    case true:
        console.log (`
        El avion esta en optimas condiciones para aterrizar.
        Bienvenidos!
        `)
    break        
}

switch(errorVelocidad){
    case true:
        console.log(`
        El avion no tiene permiso para aterrizar.
        ${estadoVelocidad}
        (La diferencia es de ${diferenciaVelocidad}km/hr)
        `)
    break
}

switch (errorAltura){
    case true:
        console.log(`
        El avion no tiene permiso para aterrizar.
        ${estadoAltura}
        (La diferencia es de ${diferenciaAltura}m)
        `)
    break
}

switch (errorGeneral){
    case true:
        console.log(`
        El avion no esta autorizado para aterrizar.
        Porfavor corregir velocidad y altura.
        `)
    break
}