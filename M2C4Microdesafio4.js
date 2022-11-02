// operadores aceptados son "sumar", "restar", "multiplicar", "dividir"

let operador = '+'
let resultado = 0
let num1 = 10
let num2 = 10


switch(operador){
    case 'sumar':
    case '+':
        operador = '+';
        resultado = num1 + num2
    break;
    case 'restar':
    case '-':
        operador = '-';
        resultado = num1 - num2
    break;
    case 'multiplicar':
    case '*':
        operador = '*';
        resultado = num1 * num2
    break;
    case 'dividir':
    case '/':
        operador = '/';
        resultado = num1 / num2
    break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")
    break
}



console.log(`
    Resultado:
    ${num1} ${operador} ${num2}= ${resultado}

    `)
