const arrayNumeros = [3, 9, 1, 7, 4, 2, 5, 6]

// 1. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.

const arrayMultiplicado = arrayNumeros.map((num) => {
    return num*5
})
const quintuplos = arrayMultiplicado

console.log(quintuplos)

// 2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.

const arrayDivididos = arrayNumeros.map((num)=>{
    return num/2
})

const metades = arrayDivididos

console.log(metades)