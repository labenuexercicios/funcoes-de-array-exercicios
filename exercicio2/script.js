const listaNumeros = [1,2,3,4,5,6,7,8]

const multiplos3= (array) => {
    const triplos= []
    for(let i of array){
        triplos.push(i*3)
    }
    return triplos
}
console.log(multiplos3(listaNumeros))

const metades= (array) => {
    const div = []
    for(let i of array){
        div.push(i/2 )
        
        
    }
    return div
}

console.log(metades(listaNumeros))