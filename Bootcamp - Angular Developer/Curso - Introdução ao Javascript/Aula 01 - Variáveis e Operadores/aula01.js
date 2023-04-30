console.log('Hello World!');        // utilizamos console.log para exibir alguma mensagem no terminal

let variavel = 10; 
variavel = 20;          // é possível alterar o valor de uma variável declarada com let

const pi = 3.14;        // não é possível alterar o valor de uma variável declarada com const

console.log(variavel);
console.log(pi);

let variavel2 = 10 - 5 + 10 * 20 / 2;   // a ordem das operações segue o padrão existente na matemática (* / + -)
console.log(variavel2);


// DESAFIO

/* 
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variaveis, sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distancia em KM da viagem; 
*/

const precoCombustivel = 5.51;
const kmPorLitro = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorDaViagem = precoCombustivel * litrosConsumidos;
console.log(valorDaViagem.toFixed(2));