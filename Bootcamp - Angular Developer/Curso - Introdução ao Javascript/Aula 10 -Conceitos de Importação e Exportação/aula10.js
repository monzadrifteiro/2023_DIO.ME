//require é uma função do node.js utilizada para importar algo 

const { gets, print } = require('./funcoes-auxiliares');    //quando importamos algo, estamos importando algo que está sendo exportado em algum lugar.

print(gets());

/*
const pessoa = {
    nome: 'Lucas'
}:

//códigos equivalentes
const { nome } = pessoa;
const nome  = pessoa.nome;
*/