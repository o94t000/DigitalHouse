let pagoMes = 6200
let consumoKWH = 150

let consumo = consumoKWH >= 300 ? pagoMes*1.2  : pagoMes
console.log(
    "Debido a que su hogar tuvo un consumo de ",consumoKWH,"kwh, en base al ajuste tarifario",
    "\n(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),",
    "\ncumplimos con informarle que se ha ajustado el total a pagar, que será de $",consumo
);