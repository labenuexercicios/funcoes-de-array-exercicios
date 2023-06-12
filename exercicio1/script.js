//------------->Função retorna UpperCase
const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const transformaUpperCase = (upper) => {
    //PRIMEIRA FORMA
    // let novoObjeto = {}
    // for(let i in upper){
    //     novoObjeto[i] = upper[i].toUpperCase()
    // }
    // return novoObjeto;

    //Segunda forma

    return {nome: upper.nome.toUpperCase(),
        profissao: upper.profissao.toUpperCase(),
        username: upper.username.toUpperCase(),
        senha: upper.senha.toUpperCase()
    }

    
    
    // for (let i in upper) {
    //     let novoUpper = upper[i].toUpperCase()
    //     novoNome.push(novoUpper)
    // }
    // return novoNome;
}
// console.log(transformaUpperCase(infosPessoa))

//--------------> Função e texto corrido
const textoObjeto = (objeto) => {

    let textoCorrido = ``
    for (let i in objeto) {
    let valor = objeto[i]
    let propriedade = [i]

    textoCorrido += `\nO valor da propriedade ${propriedade} é ${valor}\n`
    }
    return textoCorrido
}

// console.log(textoObjeto(infosPessoa))

//Criando um callback para chamá-lo em seguida
const questaoTres = (novoObjeto, callback)=>{
    return callback(novoObjeto)
}
//Chamando o callback da questão 3
console.log(questaoTres(infosPessoa, transformaUpperCase))
console.log(questaoTres(infosPessoa, textoObjeto))

