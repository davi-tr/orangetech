class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        return this.peso/(this.altura*this.altura);
    }
}

const jose = new Pessoa('Jose', 70, 1.75);

console.log(jose.calcularIMC().toFixed(2));
