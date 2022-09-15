let arrayNum = [10, 80, 30, 55, 77, 99, 100, 7];
console.log("Array original: ");
console.log(arrayNum);


const triplos = arrayNum.map((elemento) => {
    return elemento*3
})
console.log("Array com triplos: ");
console.log(triplos);


const metades = arrayNum.map((elemento)=> {
    return elemento/2
})
console.log("Array com as metades: ");
console.log(metades); 