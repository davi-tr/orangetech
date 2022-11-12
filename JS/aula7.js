
const notas = [];

notas.push(7);
notas.push(7);
notas.push(7);
notas.push(7);
notas.push(7);
var soma = 0;

for(let i = 0; i<notas.length;i++){
    soma = soma+notas[i];
}
soma = soma/notas.length;

const numero = 2;
//Crie um programa que dado umm numero imprima a sua tabuada.
for (let index = 1; index <= 10; index++) {
    var valor;
    valor = numero*index;
    
}

const valores =[];
const controler = 20
for (let index = 0; index <= controler; index++) {
    valores.push(Math.floor(Math.random()*20));
    if(index===controler){
        console.log(valores)
    }
}

for (let index = 0; index < valores.length; index++) {
    if(valores[index]%2===0){
        console.log('Numero par ' + valores[index]);
    }
    
}

