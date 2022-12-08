const array = [10,8,7,4,3,2,5,10]


function multiplicapor3(array){
    const triplos = []
    for(let elemento of array){
        //array.push(elemento * 3)
       triplos.push(elemento * 3)
    }
    return triplos
}

//array.map  == (elemento, indice, array) => {oque voce quer q a funcao retorna, usando return}, é bom criar 1 array pra receber o da funcao e manipular esse retornar esse array novo. nos parenteses pode usar 1 dos 3, ou os 3 ou 2, so elemento, ou so elemento e indice, sempre na ordem. -> O .map retorna valor, o .filter retorna booleano.

function multiplicapor3map(array){
    const triplos = array.map((numero) => {//numero = cada elemento do array
        return numero * 3
    })
    return triplos
}

function dividepor2map(array){
    const triplos = array.map((numero) => {
        return numero / 2
    })
    return triplos
}

console.log(multiplicapor3(array))
console.log(multiplicapor3map(array))
console.log(dividepor2map(array))