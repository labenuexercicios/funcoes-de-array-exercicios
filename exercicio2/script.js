const numeros = [1,2,3,4,5,6,7,8]
const triplos = numeros.map(function(num) {
    return num * 3;
});

console.log(triplos);

const metades = triplos.map(function(num) {
    return num%2===0
});

console.log(metades);