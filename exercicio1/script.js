const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function caixaAlta (objeto) {
    let nomeAlto = objeto.nome.toUpperCase()
    let profissaoAlta = objeto.profissao.toUpperCase()
    let usernameAlto = objeto.username.toUpperCase()
    let senhaAlta = objeto.senha.toUpperCase()
    return `${nomeAlto} \n${profissaoAlta} \n${usernameAlto} \n${senhaAlta}`
    };
console.log(caixaAlta(objeto));


function caixaBaixa (objeto) {
    let nomeBaixo = objeto.nome.toLowerCase()
    let profissaoBaixa = objeto.profissao.toLowerCase()
    let usernameBaixo = objeto.username.toLowerCase()
    let senhaBaixa = objeto.senha.toLowerCase()
    return `${nomeBaixo},${profissaoBaixa},${usernameBaixo},${senhaBaixa}`
};
console.log(caixaBaixa(objeto));


console.log("--------------------");


function callBack (objeto, funcao) {
    let resultado = funcao(objeto)
    return resultado
}
console.log(callBack(objeto, caixaAlta));
console.log(callBack(objeto, caixaBaixa));