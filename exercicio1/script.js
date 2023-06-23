const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (obj) => {

    const novoObj = {}

    for(let prop in obj){
       
        novoObj [prop] = obj [prop].toUpperCase()
    }
    return novoObj
}


caixaAlta(objeto)
console.log(caixaAlta(objeto))

const retornaTexto = (obj) =>{
    return ` O nome é ${obj.nome}, a profissão é ${obj.username}, o username é ${obj.username} e a senha é ${obj.senha}.`
}
console.log(retornaTexto(objeto))

function callback (objeto, callback){
    const valor = callback(objeto)
    console.log(valor)
}
callback(objeto, caixaAlta)
callback(objeto, retornaTexto)