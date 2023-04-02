// 1 execicios
const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
console.log(infosPessoa)
// 2 exercicio
const caixaAlta = (objeto) => {
    let nome = objeto.nome.toUpperCase()
    let profissao = objeto.profissao.toUpperCase()
    let username = objeto.username.toUpperCase()
    let senha = objeto.senha.toUpperCase()
    return {
        nome, profissao, username, senha
    }
}
// console.log(caixaAlta(infosPessoa))
// 3 exercicios
const textoCorrido=(objeto)=>{
    for( let i in objeto){
        console.log(`o valor da proprieda ${i} é ${objeto.nome}`)
    }
}
// textoCorrido(infosPessoa)

const funcaoCall=(objeto,callBack)=>{
        const resposta = callBack(objeto)
        return (resposta);
 
}
 funcaoCall(infosPessoa ,caixaAlta)

 funcaoCall(infosPessoa,textoCorrido)