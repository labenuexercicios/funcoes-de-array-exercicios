const arrayDeOito = [3,6,2,5,12,34,33,7]

const quintuplos = (arrayDeOito) => {
 return arrayDeOito * 5 
}

console.log(arrayDeOito)

const resultadoQuintuplo = arrayDeOito.map((i) => {
  resultado = i * 5 
  return resultado
})

console.log(resultadoQuintuplo)