
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

/*
fetch(url)                                   //por padrão o fetch utiliza o método GET
    .then(function (response) {              //processamento assincrono = não possui a resposta de imediato
        console.log(response);               //o fetch retorna uma promise de resposta, se tudo der certo na requisição ao servidor
    })        
    .catch(function (error) {
        console.log(error);                  //then = manipular uma requisição bem sucedida | catch = manipular uma requisição mal sucedida | finally = manipular uma requisição concluída
    })
    .finally(function () {
        console.log('Requisição concluída');
    })


try {       //a interface de uma promise foi baseada no bloco try

}
catch (error) {

}
finally {

}
*/

fetch(url)
    /*
    .then(function (response) {
        response.json().then(function (responseBody) {  //retorna o objeto(json) convertido
            console.log(responseBody);
        });                
    })
    */
    /*
    .then(function (response) {
        return response.json()
    })                                                  //encadeamento de then's = código mais legível
    .then(function (jsonBody) {                         //o que vai para o segundo then é o retorno do primeiro
        console.log(jsonBody)
    })
    */
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))          //redução para uma arrow function mais palatável
    .catch((error) => console.log(error))