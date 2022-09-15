// # Exercício 2
// Crie um array de números que contenha 8 números.

const arrayNum = [235,24524,5,245,234,246,2]

// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;


const arraymap1 = arrayNum.map((numeros)=>{
    const macaco = numeros*3
    return macaco
})
console.log('Estes são os números multiplicados por 3:\n',arraymap1)
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;


const filterArray = arrayNum.filter((elemento)=> elemento/2)
console.log('Estes são os números divisíveis por 2:\n',filterArray)


