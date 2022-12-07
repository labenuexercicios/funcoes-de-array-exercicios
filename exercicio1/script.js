// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
// saída esperada:

// `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

// Na 1A E 1B, acho que rola um FOR IN também
// Na 1C, vai ser necessário uma Callback pelo jeito.

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const objetoUP = (valor) =>{
    for (const i in valor){
        const oUP = valor[i].toUpperCase()
        console.log(`${i}: ${oUP}`)
    } return ` `
} 

const objetoUP2 = (valor) =>{
    let valorUP = ""
    for (const i in valor){
        const oUP = valor[i].toUpperCase()
        valorUP += `${i}: ${oUP}\n`
    } return valorUP
} 

// objetoUP(objeto)

const objetoToString = (valor) =>{
    const novoValor = JSON.stringify(valor)
    return novoValor
}
// console.log(objetoToString(objeto))


// 3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const funcao3Print = (objeto, callback) => {
    const novoObjeto = callback(objeto)
    console.log(novoObjeto)
}

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

console.log("Objeto original:", objeto)

console.log("\nObjeto Upper, método1:")
funcao3Print(objeto, objetoUP)

console.log("Objeto Upper, método2:")
funcao3Print(objeto, objetoUP2)

console.log("\nObjeto em string:")
funcao3Print(objeto, objetoToString)

console.log("\nVerificando objeto original:", objeto)




