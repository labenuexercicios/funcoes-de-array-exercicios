const numeros = [77, 852, 47544, -558, 855, 777, 19, 3]

const triplos = numeros.map((elemento, indice, arrayOriginal) => {
  return elemento * 3
})
console.log(triplos)

const metades = numeros.map((elemento, indice, arrayOriginal) => {
  return elemento / 2
})
console.log(metades)

//

const callback = (item, indice, array) => item / 2

const metadess = numeros.map (callback)

console.log(metadess)