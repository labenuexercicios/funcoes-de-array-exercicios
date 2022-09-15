const numArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Array sem alteração", numArr )

let newArrMultiplicado = numArr.map((num) => { 
    return num * 3
})

const triplos = newArrMultiplicado
console.log("Multiplicado por três:", triplos)


let newArrDivisao = numArr.map((numero) => {
    return numero/2

})
const metades = newArrDivisao
console.log("Divido por dois:", metades)