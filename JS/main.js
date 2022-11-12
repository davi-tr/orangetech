

const {gets, print} = require('./aula8');

const sorteados = [];
var valor = 1;

for (let index = 0; index < 5; index++) {
    const sorteado = gets();
    sorteados.push(sorteado);
    
}

for (let index = 0; index < sorteados.length; index++) {
    if(sorteados[index]>valor){
        valor = sorteados[index];
    }
    
}

print(valor);

