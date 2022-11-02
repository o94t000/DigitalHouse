// Ejercicio 1
// Crear una función que recibe un string en minúscula, lo convierte a mayúsculas y lo retorna.
// Investiga qué hace el método de strings .toUpperCase()

let ej1 = "banana, manzana, sandia";
let resultado1 = ej1.toUpperCase();
console.log(resultado1)


//Ejercicio 2
// Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
// Investiga qué hace la palabra reservada typeof().

let ej2 = "banana";
console.log(typeof ej2)


//Ejercicio 3
// Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
function resultado3 (ej3){
    return ej3 * 7
}

console.log(resultado3(7))


//Ejercicio 4
// Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que dicha función recibe tres parámetros:
// El salario mensual, la cantidad de días trabajados y la cantidad de horas que regularmente trabajada por día.

function resultado4 (salarioMensual, diasTrabajados, horasTrabajadasPorDia){
    return (salarioMensual / diasTrabajados) /horasTrabajadasPorDia
}
console.log(resultado4(200000, 25, 8))