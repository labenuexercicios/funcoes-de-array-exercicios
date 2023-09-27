/*# Exercício 1
Crie um array de números que contenha 8 números.
Com este array e utilizando o `map()`, retorne os arrays abaixo:

1. Retorne um novo array contendo os números multiplicados por 5.
 Guarde esse array dentro de uma variável `const quintuplos`.
2. Retorne um novo array contendo os números divididos por 2. 
Guarde esse array dentro de uma variável `const metades`.*/

const array = [1,2,3,4,5,6,7,8]

const multiplicaPor5 = array.map((item) =>{
    return item * 5
}) 
   console.log(multiplicaPor5)

   const quintuplos = multiplicaPor5
    
   const divididosPor2 = array.map((item) =>{
    return item /2 
   })

   console.log (divididosPor2)
    const metades = divididosPor2