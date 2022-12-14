/**Exercício 2

Crie um array de números que contenha 8 números.
 Depois disso, utilize este array para criar duas 
 funcões de array map():

    A primeira deve retornar um novo array contendo os
     números múltiplicados por 3, Crie uma const triplos, 
     e guarde o valor do array nesta const;
    A segunda deve retornar um novo array contendo os 
    números divididos por 2. Crie uma const metades, 
    e guarde o valor do array nesta const;
 */
//    let inserirNumero = Number (prompt("insira números aqui"));
const numerosArray = [90, 5, 10, 62, 30, 17, 15, 20]


const triplo = numerosArray.map((numerosArray) =>
      /*const paraTres = */numerosArray * 3)
console.log(triplo)

const duplo = numerosArray.map((numeroArray) =>
      /*const paraDois =*/ numeroArray / 2)
console.log(duplo)