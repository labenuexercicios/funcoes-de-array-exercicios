// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

const arrayNumbers = [15, 22, 35, 44, 53, 66, 79, 88]

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;

const triplos = arrayNumbers.map((numero) =>{
    return numero * 3
})
console.log(triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = arrayNumbers.map((numero) =>{
    return numero / 2
})
console.log(metades)