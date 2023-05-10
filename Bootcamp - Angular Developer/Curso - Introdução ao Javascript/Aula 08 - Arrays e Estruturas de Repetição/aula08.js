//ARRAYS
/*
const alunos = ['Lucas', 'Gabriel', 'Cossito'];             //listas são representadas por colchetes

console.log(alunos[0]);             //assim como em outras linguagens, o primeiro elemento possui posição em 0
console.log(alunos[1]);
console.log(alunos[3]);             //se a posição chamada não existe, ela é undefined

alunos.push('Iraikare');            //utilizamos push para adicionar um valor ao array

alunos[4] = 'Renan';                //listas são dinâmicas
alunos[4] = 'Jorge';                //podemos substituir valores inseridos no array

alunos.push(10);                    //podemos misturar tipos de variáveis diferentes em um mesmo array

alunos.push('Gomes');

console.log(alunos.pop());          //remove o último item do array

console.log(alunos.shift());        //remove o primeiro item do array

console.log(alunos);
*/

//ESTRUTURAS CONDICIONAIS
/*
notas.push(5);
notas.push(7);
notas.push(8);                      //código não genérico
notas.push(2);
notas.push(5);

const nome = 'Lucas de Lima Nunes Fernandes'    //strings são arrays de caracteres(char)

for (let i = 0; i < nome.length; i++) {         //a estrutura do For está dividida em: contador, condição e incremento.
   console.log(nome[i]);
}

const soma  = nota[0] + nota[1] + nota[2] + nota[3] + nota[4];

console.log(soma / notas.length);               //o método length mostra a quantidade de itens armazenados numa lista
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const notaFinal = soma / notas.length;
console.log(notaFinal.toFixed(2));