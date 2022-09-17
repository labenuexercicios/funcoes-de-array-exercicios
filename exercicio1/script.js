const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//1)
function maiusculo(objeto) {
    for (let i in objeto) {
        objeto[i] = objeto[i].toUpperCase();
    }
    return objeto;
}

//2
function textoCorrido(objeto) {
    let texto = ""
    for (let i in objeto) {
        texto = texto + `${objeto[i]} `
    }

    return texto;
}

//3
function imprimir(objeto, funcao) {
    return console.log(funcao(objeto))
}

imprimir(objeto, maiusculo)
imprimir(objeto, textoCorrido)