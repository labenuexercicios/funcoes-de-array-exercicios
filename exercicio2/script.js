const arrayNumeros = [1,2,3,4,5,6,7,8]
const funcaoNumerosMultPor3 = arrayNumeros.map((numeros) => {
    const novoArray = []
    for(let multi of numeros) {
     novoArray.push(multi * 3)
    }
    console.log(novoArray)
})
novoArray()




// console.log(funcaoNumerosMultPor3())

// const funcaoNumerosDivPor2 = arrayNumeros.map((numeros2) => {

// })