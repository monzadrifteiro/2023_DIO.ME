function gets() {           //gets mockado = gets simulado
    return 10;
}

function print(texto) {
    console.log(texto);
}

/*
module.exports.gets = gets;
module.exports.print = print;
*/

//utilizamos module.exports para exportar algo
module.exports = { gets, print };                   //module é o objeto e exports é seu atributo