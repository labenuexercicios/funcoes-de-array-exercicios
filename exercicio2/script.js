const primes = [2, 3, 5, 7, 11, 13, 17, 19]

const quintuplos = primes.map((cinco)=>{
return cinco *5
})
console.log(quintuplos)

const metades = quintuplos.map((dividindo)=>{
return dividindo / 2
})
console.log(metades)