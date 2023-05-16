// Questão 1

class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularValorGastoNaViagem(distanciaKm, precoCombustivel) {
        const valorGasto = distanciaKm * this.gastoMedioPorKm * precoCombustivel;
        return valorGasto;
    }
}

const siena = new Carro('Fiat', 'Branco', 1 / 11);
console.log(siena.calcularValorGastoNaViagem(100, 5.51));

const palio = new Carro('Fiat', 'Preto', 1 / 10);
console.log(palio.calcularValorGastoNaViagem(70, 5));

//  Questão 2

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
  
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    
    classificarImc() {
        const imc = this.calcularImc();

        if(imc < 18.5) {
            return 'Abaixo do peso';
        }
        else if(imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        }
        else if(imc >= 25 && imc < 30) {
            return 'Acima do peso';
        }
        else if(imc >= 30 && imc < 40) {
            return 'Obeso';
        }
        else {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);

console.log('Meu IMC é ' + jose.calcularImc().toFixed(2));
console.log(jose.classificarImc());