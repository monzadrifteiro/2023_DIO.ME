function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome('Lucas');
escrevaMeuNome('Gomes');

const minhaIdade = 17;

function conferirIdade(idade) {
    if(idade >= 18) {
        console.log('Maior de idade');
    }
    else {
        console.log('Menor de idade');
    }
}

conferirIdade(minhaIdade);

/*
function meuNome(nome) {
    return nome;
}

const minhaIdade = 17;

function conferirIdade(idade) {
    if(idade >= 18) {
        console.log(escrevaMeuNome('Lucas') + 'é maior de idade');
    }
    else {
        console.log(escrevaMeuNome('Lucas') + ' é menor de idade');
    }
}

conferirIdade(minhaIdade);
*/

const preco = 100;
const formaDePagamento = 2;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}
function incrementarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

if(formaDePagamento === 1) {
    console.log(aplicarDesconto(preco, 10));
}
else if(formaDePagamento === 2) {
    console.log(aplicarDesconto(preco, 15));
}
else if(formaDePagamento === 3) {
    console.log(preco);
}
else {
    console.log(incrementarJuros(preco, 10));
}