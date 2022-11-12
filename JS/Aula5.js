class Carro{
    marca;
    cor;
    gastoMed;
    valorPorL;
    valorFinal;

    constructor(marca,cor,gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMed = gastoMedio;
    }
    calcular(quantidadeKM, preco) {
        return (preco/this.gastoMed)*quantidadeKM; 
    }

}

const carro = new Carro('Audi','Preto',12.5);
console.log(carro.calcular(2000,5.70));