// EXERCÍCIO 2

// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:
// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;

arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80]

const triplos = arrayNumeros.map((numero) => {
    return numero * 3
})
console.log('Números multiplicados por 3', triplos);

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = arrayNumeros.map((numero) => {
    return numero / 2
})
console.log('Números divididos por 2', metades);