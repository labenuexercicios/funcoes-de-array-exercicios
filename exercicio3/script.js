const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//

//
const funcaoCallback = (objeto, callback) => {
    console.log(objeto , callback(objeto))

}

funcaoCallback(infosPessoa, retornaTexto)