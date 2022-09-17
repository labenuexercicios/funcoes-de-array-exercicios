const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const functionA = obj => {
    let upper = ''
    for ( i in obj ) {
        upper += obj[i].toUpperCase()
    }
    return upper
}

const functionB = obj => {
    let upper = ''
    for ( i in obj ) {
        upper += obj[i]
    }
    return upper
}

const callBack = (obj, cb) => {
    return cb(obj)
}

console.log(callBack(objeto, functionA))
console.log(callBack(objeto, functionB))


















