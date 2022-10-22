// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
const funcA = (param1) =>{
    return {
        nome:param1.nome.toUpperCase(),
        profissao:param1.profissao.toUpperCase(),
        username:param1.username.toUpperCase(),
        senha:param1.senha.toUpperCase(),
    }
}
console.log(funcA(objeto))

// 2. A segunda deve retornar os valores do objeto como texto corrido.

const textoCorrido = (param1) =>{
    let mensagem = `${param1.nome} ${param1.profissao} ${param1.username} ${param1.senha}`
    return mensagem
    } 
    //CREDITOS ALUNO: CARLOS NOGUEIRA

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const imprimir = (objeto, callback) => {
    console.log(callback(objeto))
}

imprimir(objeto, funcA)
imprimir(objeto, textoCorrido)

// CREDITOS ALUNO CARLOS NOGUEIRA

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2