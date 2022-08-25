const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function objetoFucao(operador){
    const caixaAlta = {...objeto, 
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
    return caixaAlta
}
console.log(objetoFucao(objeto));

// ------------------------------------------

function textoCorrido(operador){
    const caixaAlta = {...objeto,
        textoCorrido: objeto.nome + " " +
        objeto.profissao + " " +
        objeto.senha +  "" +
        objeto.username
    }
    return caixaAlta.textoCorrido
}
console.log(textoCorrido(objeto));

// -------------------------------------

function funcao3(operador,callcack) {
    const resultado = callcack(operador)
    console.log(funcao3, resultado);
    return resultado
}
funcao3(objeto,objetoFucao);
