// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos",
}
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function objetomuda (nome){
    for (let i in nome){
    nome[i] =  nome[i].toUpperCase()
}
return nome
}
console.log(objetomuda(objeto))
// 2. A segunda deve retornar os valores do objeto como texto corrido.
function showValues(nomes){
    let text = "";
    for(let i in nomes){
        text += `${i} - ${nomes[i]}; `
    }
    return text.trim()
}

console.log(showValues(objeto))


// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

function objCallBack(objeto, functio){
    console.log(functio(objeto));
}
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
objCallBack(objeto,objetomuda)
// Repita o processo para a funcão 2
objCallBack(objeto,showValues)


