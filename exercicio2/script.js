const arrayDeNumeros = [5, 71, 13, 100, -29, 48, 62, 45]

const quintuplus = arrayDeNumeros.map((elemento, indice, arrayOriginal) =>
  elemento * 5
)
console.log(quintuplus)


const callback = (elemento, indice, arrayOriginal) => elemento / 2

const metades = arrayDeNumeros.map(callback)
console.log(metades)

const metade = quintuplus.map(callback)
console.log(metade)