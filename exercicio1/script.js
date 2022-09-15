const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
const alteraProp = (objetos) =>{
    return {
        nome:objetos.nome.toUpperCase(),
        profissão:objetos.profissao.toUpperCase(),
        username:objetos.username.toUpperCase(),
        senha:objetos.senha.toUpperCase()
    }
}
console.log(alteraProp(objeto))

function prop(objeto){
    console.log(`${objeto.nome.toUpperCase()} ${objeto.profissao.toUpperCase()} ${objeto.username.toUpperCase()} ${objeto.senha.toUpperCase()}`)
}
prop(objeto)
// 2. A segunda deve retornar os valores do objeto como texto corrido.
function texto(objeto){
    console.log(`${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`)
}
texto(objeto)



// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
function oac(objeto,callback){
    console.log("Trocando",callback(objeto))
}
oac(objeto,alteraProp)
oac(objeto,texto)

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2