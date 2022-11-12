const gasolin = 5.34;
const alcool = 4.34;
var tipo = "gasolina";
var consuMedioA = 12;
var distancia = 2000;

if(tipo === "alcool"){
    var calculo = (alcool/consuMedioA)*distancia;
    console.log("Custo da viagem caso seja feita no alcool: ", calculo.toFixed(2));
}else{
    var calculo = (gasolin/consuMedioA)*distancia;
    console.log("Custo da viagem caso seja feita na gasolina: ", calculo.toFixed(2));
}