const arrayNumeros = [2, 5, 4, 8, 11, 16, 20, 25]

const quintuplos = arrayNumeros.map((numero)=>{
    return numero * 5
})

const metades = arrayNumeros.map((numero)=>{
    return numero / 2
})

console.log(quintuplos);
console.log(metades);