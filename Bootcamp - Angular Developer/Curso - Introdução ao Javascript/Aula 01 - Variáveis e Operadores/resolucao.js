const precoCombustivel = 5.51;
const kmPorLitro = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorDaViagem = precoCombustivel * litrosConsumidos;
console.log(valorDaViagem.toFixed(2));