const arrayNum = [2,5,32,53,66,76,87,99]
console.log("Original:",arrayNum)

const triplos = arrayNum.map((numero,indice,array) =>{
return numero *3})
console.log("Map X 3:", triplos)

const metade = arrayNum.map((numero, indice,array) =>{
    return numero /2})
    console.log("Map / 2:", metade)