/**Exercício 1

Crie duas funcões que recebem como parâmetro um objeto 
(o objeto está pronto no arquivo JS).

    A primeira deve retornar o objeto, alterando as 
    propriedades dele para que os valores deste objeto 
    fiquem em CAIXA ALTA. saída esperada:

{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username:
 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}

    A segunda deve retornar os valores do objeto como texto 
    corrido.

    Em seguida, crie uma funcão que recebe o objeto e um 
    callback como parâmetros. A funcão deve passar o objeto
     como argumento da funcão de callback, e em seguida 
     imprimir o valor retornado.

Chame a funcão 3, passando como argumentos o objeto passado 
no arquivo script.js, e a funcão 1. Repita o processo para 
a funcão 2 */

const objeto = {
    nome: "astrodev",
    profssao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const objetoDeFuncao = function (alterarValores) {
    return alterarValores = {
        nome: alterarValores.nome.toUpperCase(),
        profissao: alterarValores.profissao.toUpperCase(), username: alterarValores.toUpperCase(),
        senh: alterarValores.senha.toUpperCase()
    }
}

const textoJunto = function (objeto) {
    return `Ola ${objeto.nome}, ${objeto.senha}, ${objeto.username} `
}

const funcaoNova = function (alterarValores, callback) {
    console.log(callback(alterarValores))
}
funcaoNova(objeto, objetoDeFuncao)
funcaoNova(objeto, textoJunto)


