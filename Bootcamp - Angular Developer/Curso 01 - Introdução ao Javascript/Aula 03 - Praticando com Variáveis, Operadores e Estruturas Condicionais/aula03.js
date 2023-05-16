// Questão 1

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if(media < 5) {
    console.log('Reprovação');
}
else if(media >= 5 && media <= 7) {
    console.log('Recuperação');
}
else {
    console.log('Passou de semestre');
}

// Questão 2

const peso = 80;
const altura = 1.75;

const imc = peso / Math.pow(altura,2);

if(imc < 18.5) {
    console.log('Abaixo do peso');
}
else if(imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}
else if(imc >= 25 && imc < 30) {
    console.log('Acima do peso');
}
else if(imc >= 30 && imc < 40) {
    console.log('Obeso');
}
else {
    console.log('Obesidade Grave');
}

// Questão 3

const preco = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1) {
    console.log(preco - (preco * 0.1));
}
else if(formaDePagamento === 2) {
    console.log(preco - (preco * 0.15));
}
else if(formaDePagamento === 3) {
    console.log(preco);
}
else {
    console.log(preco + (preco * 0.10));
}