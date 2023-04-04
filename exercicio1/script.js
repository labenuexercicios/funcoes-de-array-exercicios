const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//1
const maiusculas = (objeto) => {
    for (let i in objeto) {

        objeto[i] = objeto[i].toUpperCase()

    }
    return objeto
}
console.log(maiusculas(infosPessoa))

//2
const imprimir = (objeto) => {
    for (let i in objeto) {
        console.log(`O valor da propriedade ${i} é ${objeto[i]}`)
    }
}
imprimir(infosPessoa)




//3
const receberObjeto = (objeto, callback) => {
    const result = callback(objeto)
    return result
}

receberObjeto(imprimir(infosPessoa))


