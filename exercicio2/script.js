// # Exercício 2
// Crie um array de números que contenha 8 números.
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const array1 = []

for (let i = 0 ; i < 8 ; i++){
  array1.push(numRandom(1,10))
}
console.log ("Array original:\n",array1)

// Depois disso, utilize este array para criar duas funcões de array `map()`:
// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
const triplos = array1.map(num => num*3)
console.log("Array x3:\n",triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;
const metades = array1.map(num => num/2)
console.log("Array ÷2:\n",metades)

