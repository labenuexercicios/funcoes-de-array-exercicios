//EXERCÍCIO 1
const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//PARTE 1
const objectCapsLock = (element) =>{
    for(let item in element){
        element[item] = element[item].toUpperCase()
    }
    return element
}
console.log(objectCapsLock(objeto))

//MODO DIFERENTE DE FAZER
const capsLock = (object) =>{
    return object = {
        nome: object.nome.toUpperCase(),
        profissao: object.profissao.toUpperCase(),
        username: object.username.toUpperCase(),
        senha: object.senha.toUpperCase()
    }
}
console.log(capsLock(objeto))

//PARTE 2
const runningText = (element) =>{
    let text = ""

    for (let i in element){
        text = text + `${element[i]}`
    }

    return text;
}
console.log(runningText(objeto))

//PARTE 3
const callback = (object, call) =>{
    const result = call(object)

    return result
}
console.log(callback(objeto, objectCapsLock))
console.log(callback(objeto, runningText))