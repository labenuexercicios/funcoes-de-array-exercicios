const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (obj)=>{
    const novoObjeto = {}
    //novoObjeto["nome"] = "Osmar"
   // novoObjeto.profissao = "Dev"
   for(let prop in obj){
        novoObjeto[prop] = obj[prop].toUpperCase()
   }
   return novoObjeto
}

const textoCorrido = (obj)=>{
    const frase = `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username}, e a senha é ${obj.senha}. `
    return frase
}

const funcao3 = (obj, callback)=>{
    const valor = callback(obj)
    return valor
}
// resposta 1
console.log(caixaAlta(objeto))
//resposta 2
console.log(textoCorrido(objeto))
//resposta 3
console.log(funcao3(objeto, caixaAlta))
console.log(funcao3(objeto, textoCorrido))