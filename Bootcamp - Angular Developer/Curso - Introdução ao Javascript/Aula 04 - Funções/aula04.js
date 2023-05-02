

function teste() {                  //a sintaxe de uma função é composta por: palavra reservada "function" + nome da função + ()  
    console.log('teste');           //chamamos de Procedimento as funções que não possuem retorno
}

teste();            //a forma mais simples de invocar uma função é escrevendo seu nome acompanhado dos ()


function sayMyName(name) {                      //as funções podem receber parâmetros no momento de sua criação 
    console.log('Your name is: ' + name);
}

sayMyName('Lucas');                             //podemos passar os parâmetros na hora da invocação da função
sayMyName('Felipe');

function quadrado(valor) {
    return valor * valor;       //usamos o return para retornar o resultado final de uma função, assim possibilitando o uso dele em outras partes do código
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {                 //podemos passar mais de um parâmetro utilizando uma vírgula para separa-los
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));

// Utilização do Main

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } 
    else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } 
    else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } 
    else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } 
    else {
        return 'Obsedidade Grave';
    }
}

(function main() {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})()                                //função imediatamente invocada

/*
(function () {                      //funções não nomeadas são aquelas que não possuem nome e não podem ser mais invocadas por não o possuírem
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})()
*/

/*
main();                             //depois de declaradas as funções se comportam como objetos

main = function() {
    console.log(1);
}

const main2 = main;

main2();
*/