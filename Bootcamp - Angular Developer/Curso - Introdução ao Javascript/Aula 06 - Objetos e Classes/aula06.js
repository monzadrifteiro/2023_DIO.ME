class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }
    else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}

const lucas = new Pessoa('Lucas', 17);
const marcos = new Pessoa('Marcos', 20);

compararPessoas(lucas, marcos);

//CLASSES
/*

class Pessoa {                  //classe é uma definição do que deveria ser 
    nome;                       //instância é uma ocorrência de uma classe
    idade;
    anoDeNascimento;

    constructor(nome, idade) {             //constructor é o que acontece quando uma classe é instanciada
        this.nome = nome;                  //o construtor pode receber parametros
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {               //quando declaramos um método não utilizamos a palavra reservada Function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}


const lucas = new Pessoa('lucas', 17);
const marcos = new Pessoa('marcos', 20);

lucas.descrever();
marcos.descrever();

console.log(lucas);


const marcos = new Pessoa();
console.log(marcos);            //uma nova instância, por padrão, inicia com seus atributos 'undefined'

marcos.nome = 'Marcos Leonardo';
marcos.idade = 20;

console.log(marcos);
*/


//OBJETOS
/* 

const lucas = {                 //a forma mais simples de criar um objeto literal é utilizando {}
    nome: 'Lucas de Lima',      //um objeto pode ser definido como uma coleção chaves-valores
    idade: 17,

    descrever: function () {     //funções dentro de um objeto são chamadas de métodos
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);           //a palavra reservada this se refere ao contexto em que está inserida, neste caso é o objeto 
    }
};

console.log(lucas.nome);
console.log(lucas.idade);

console.log(lucas);             //a saída da impressão de um objeto são todos os seus valores armazenados

lucas.altura = 1.80;            //podemos incrementar valores de forma dinâmica
delete lucas.nome;

const atributo = 'idade';
console.log(lucas[atributo]);   //existem formas mais dinâmicas de acessar atributos de um determinado objeto
console.log(lucas['nome']);     //notação de coleção

lucas.nome = 'teste';           //acesso direto
lucas['nome'] = 'teste';        //acesso dinâmico
*/