const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


const objetoFuncao1 = function(alterarValores){
    


     return alterarValores = {nome:alterarValores.nome.toUpperCase(),
    profissao: alterarValores.profissao.toUpperCase(),username: alterarValores.username.toUpperCase(),
    senha: alterarValores.senha.toUpperCase()}
                 
}
 //console.log(objetoFuncao1(objeto))




const textoCorrido = function (objeto) { return`Olá ${objeto.nome} ${objeto.profissao}, ${objeto.username}, ${objeto.senha}`
}

//console.log(textoCorrido(objeto))



const novaFuncao = function(alterarValores, callback){
    console.log(callback(alterarValores))
}


novaFuncao(objeto, objetoFuncao1)
novaFuncao(objeto, textoCorrido)




//EXTRA

/* const mostraIdade = (idade)=>{
  console.log("Sua idade é " ,idade)
}

const calcularIdade = (anoAtual,anoNasc,callback)=>{
  
 const calculoAno = anoAtual - anoNasc
 callback(calculoAno)

}

calcularIdade (2022,1994,mostraIdade) */

/* const mostrarJogador = (jogador)=>{
  console.log("O melhor jogador é: ", jogador)
  }

  const nomeJogador = (nome,callback)=>{
    const resultado = nome
    callback(resultado)
  }

  
  nomeJogador ("Gabriel Jesus",mostrarJogador)


 */

/* 
  const mostrarCantor = (cantor) =>{
    console.log("O cantor é " +cantor)
  }

  const nomeCantor = (callback)=>{
    let nome = prompt("Digite o nome do cantor")
    callback(nome)
  }

  nomeCantor (mostrarCantor)  */

  const verificaAtividade =(hora) =>{
    if(hora === 7) {
      return "trabalhar"
    } else if (hora === 12){
      return "almoçar"
    }else if (hora ===23){
      return "dormir"
    }else return "estudar"
  }

  const imprimeAtividade = (horaAtual,callback)=>{
    const atividade = callback(horaAtual)
    return `agora é hora de ${atividade}`
  }

  console.log(imprimeAtividade(7, verificaAtividade))


