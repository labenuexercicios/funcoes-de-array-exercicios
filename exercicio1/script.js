const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

console.log(objeto.nome)

const caixaAlta = (meuObjeto) => {
    meuObjeto.nome = meuObjeto.nome.toUpperCase();
    meuObjeto.profissao = meuObjeto.profissao.toUpperCase();
    meuObjeto.username = meuObjeto.username.toUpperCase();
    meuObjeto.senha = meuObjeto.senha.toUpperCase();
    
    console.log(meuObjeto)
    
}

const textoCorrido = (meuObjeto) =>{
    let texto = null;
    texto = meuObjeto.nome;
    texto += meuObjeto.profissao = meuObjeto.profissao;
    texto += meuObjeto.username = meuObjeto.username;
    texto += meuObjeto.senha = meuObjeto.senha
    console.log(texto)
}

const join = (meuObjeto, funcaoCaixaAlta, funcaoTextoCorrido) => {
    funcaoCaixaAlta(meuObjeto);
    funcaoTextoCorrido(meuObjeto)
}

join(objeto,caixaAlta,textoCorrido)

