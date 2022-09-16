const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
//A
function caixaAlta (array){
    let Mai=[]
    let tamanhoNome =(objeto.nome.toUpperCase())
    let profissao = (objeto.profissao.toUpperCase())
    let username = (objeto.username.toUpperCase())
    let senha = (objeto.senha.toUpperCase())
    Mai.push(tamanhoNome,profissao,username,senha)
    return Mai
}
console.log(caixaAlta(objeto))

// A segunda deve retornar os valores do objeto como texto corrido.(``)

// const textoCorr = (objeto) =>{
//     let texto= null
//     texto= objeto.nome
//     texto+= objeto.profissao
//     texto+= objeto.username
//     texto+= objeto.senha
//     return texto
// }

// console.log(textoCorr(objeto))




const func2 = () =>{
    const arrayDoObjeto = []
    for (let propriedade in objeto){
        arrayDoObjeto.push(objeto[propriedade])
    }
        return arrayDoObjeto
}
        console.log(func2(objeto))




// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const join = (caixaAlta,func2) =>{
    for(let propriedade in objeto){
        console.log(objeto[propriedade].toUpperCase())
}
    let ResultadoFinal= func2(caixaAlta)
    return ResultadoFinal
}
console.log(join(caixaAlta,func2))