const ceuEAzul = true;      // variáveis do tipo Bool guardam somente True ou False.
const marEVermelho = false;

const numero = 10;

/*

const isNumeroEPar = (numero % 2) === 0;       // "==" ignora o tipo da variável, convertendo-a automaticamente. "===" não ignora o tipo da variável.

console.log(isNumeroEPar);     // Por convenção declaramos variáveis booleanas com "is" ou "eh" para representar uma ideia de estado.

if (isNumeroEPar) {            // se a condição for verdadeira o operador IF irá executar os códigos contidos nele.
    console.log('Par')
}
else {                         // Else = Senão.
    console.log('Impar')
}

if (!isNumeroEPar) {           // utilizamos o "!" para representar uma desigualdade na condição. Neste caso, se o número NÃO for par o operador IF irá executar os códigos contidos nele.
    console.log('Impar')
}

*/

if ((numero % 2) === 0) {
    console.log('Par')
}
else {
    console.log('Impar')
}

const numero2 = 0;
const numeroDivisivelPor5 = (numero2 % 5) === 0;

if (numero2 === 0) {
    console.log('O número é inválido')
}
else if (numeroDivisivelPor5) {             // Else if = Senão se.
    console.log('Sim')
}
else {
    console.log('Não')
}