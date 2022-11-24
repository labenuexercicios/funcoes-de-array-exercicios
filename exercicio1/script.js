/*========================= Exercício 1 ====================================
Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
saída esperada:

`{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

2. A segunda deve retornar os valores do objeto como texto corrido.

3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2
 */

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//============================ PRIMEIRA FUNÇÃO =============================
// Transformar todos os valores do objeto em caixa alta

const funcaoCaixaAlta = (obj) => {
    
    for (index in obj) {
        
        if (typeof obj[index] === "string") {
            obj[index] = obj[index].toUpperCase()
        }
    }
    return obj
};
//console.log(funcaoCaixaAlta(objeto))


//========================= SEGUNDA FUNÇÃO =================================
// Retornar todos os valores em um frase

const functionText = (obj) => {
    let text = ""

    for (index in obj) {
        text += obj[index] + " "
    }
    return text
}
//console.log(functionText(objeto))


//========================= TERCEIRA FUNÇÃO ================================
//Criar um função que recebe um objeto e um callback. A função deve passar o objeto como argumento da callback.

const imprimirValor = (obj, functionCallBack) => {
    return functionCallBack(obj);
}
console.log(imprimirValor(objeto, funcaoCaixaAlta))
console.log(imprimirValor(objeto, functionText))



