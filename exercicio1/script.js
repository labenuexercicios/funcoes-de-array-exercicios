const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function aumentatamanho (objeto) {
    const objeto2 = objeto
    const Moum = confirm("Deseja maiusculo ou minusculo?")
    if(Moum){
        for(let i in objeto){
            objeto2[i] = objeto2[i].toUpperCase()
            console.log(objeto2[i])
        }
        return objeto2
    }
    else{
        return objeto
    }
}
aumentatamanho(objeto)

function somatexto (objeto){
    let stringdafrasetoda = "."
    stringdafrasetoda  = objeto.nome + ", " + objeto.profissao + ", "+ objeto.username + ", "+ objeto.senha
        console.log(stringdafrasetoda)

}

somatexto(objeto)

function recebeobjetoefuncao (objeto, callback){
    const retornaobjeto = callback(objeto)
    console.log(retornaobjeto)
}

recebeobjetoefuncao(objeto, aumentatamanho)
recebeobjetoefuncao(objeto, somatexto)

