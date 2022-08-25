const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaalta = (obj) => {
    for(let item in obj) {
        obj[item] = obj[item].toUpperCase()
    }

    return obj
}

const Corrido = (obj) => {
    for(let item in obj) {
        obj[item] = String(obj[item]).replaceAll(" ", "").trim()
    }

    return obj
}

const CallBack = (obj, callBack) => {
    console.log(callBack(obj))
}

console.log(CallBack(objeto, Corrido))