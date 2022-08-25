// EXERCÍCIO 1

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

const caixaAlta = (parametro) => {
    return {
    nome: parametro.nome.toUpperCase(),
    profissao: parametro.profissao.toUpperCase(),
    username: parametro.username.toUpperCase(),
    senha: parametro.senha.toUpperCase()
    }
}

console.log(caixaAlta(objeto));

// 2. A segunda deve retornar os valores do objeto como texto corrido.

const textoCorrido = (parametro) => { 
    return (Object.values(parametro)).join(', ')
}
console.log(textoCorrido(objeto));

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const funcao2 = (objeto, callback) => {
    return callback(objeto)
}