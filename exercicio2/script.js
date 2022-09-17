const arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80]

console.log("Array original", arrayNumeros)

const novoArray = arrayNumeros.map((num) => {
    const triplos = num * 3
    return triplos
})

console.log("Array Multiplicação", novoArray)

const novoArray2 = arrayNumeros.map((num) => {
    const metades = num % 2
    return metades
})
console.log("Array Divisão", novoArray2)