const precoEtanol = 2.90;
const precoGasolina = 5.51;
const tipoCombustivel = 'Gasolina';
const kmPorLitro = 10;
const distanciaKm = 100;

let valorGasto = 0;
const litrosConsumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
}
else if (tipoCombustivel === 'Gasolina') {
    valorGasto = litrosConsumidos * precoGasolina;
}

console.log(valorGasto.toFixed(2));