// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const number = [15,20,30,50,60,70,80,90]

const numeroX = number.map((x) => {
    return x*3
})
console.log(`Multiplicado por 3:`,numeroX)


// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;
const metade = number.map((numerox) => numeroX/2)
console.log(`Dividido por 2:`, metade)

