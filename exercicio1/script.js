const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


const caixaAlta = (infosPessoa) => {
    const letraMaiuscula = {}
    for (let i in infosPessoa) {
        letraMaiuscula[i] = infosPessoa[i].toUpperCase();
       
    }
    return letraMaiuscula

}
console.log(caixaAlta(infosPessoa))


