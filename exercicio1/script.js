const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1)

  const mudaPropriedadeObjetoParaCaixaAlta = (objeto) => {
    const objetoCaixaAlta = {};
    // objetoCaixaAlta.nome = 'Lincon'
    // objetoCaixaAlta[`profissao`] = 'Dev'
    // console.log(objetoCaixaAlta)
    for (let propriedades in objeto) {
      //console.log(propriedades)
      //console.log(typeof propriedades)
      objetoCaixaAlta[propriedades] = objeto[propriedades].toUpperCase()  
      
    }
    return objetoCaixaAlta
  }    
    
 console.log(mudaPropriedadeObjetoParaCaixaAlta(objeto))


// outra forma
// function valoresCaixaAlta(objeto){
//     const objetoAlterado = {
//         nome: objeto.nome.toUpperCase(),
//         profissao: objeto.profissao.toUpperCase(),
//         username: objeto.username.toUpperCase(),
//         senha: objeto.senha.toUpperCase()
//     }
//     return objetoAlterado
// }
// console.log(valoresCaixaAlta(objeto))


// 2)
  
  // const escreveTextoCorrido = (objeto) => {
  //   let texto = ""
  //   const propriedades = Object.keys(objeto)
  //   for (let i = 0; i < propriedades.length; i++) {
  //     const propriedade = propriedades[i]
  //     const valor = objeto[propriedade]
  //     texto += `${i === 0 ? "O" : " a"} ${propriedade} é ${valor}${i === propriedades.length - 1 ? "." : ","}`
  //   }
  //   return texto
  // }
  
  // console.log(escreveTextoCorrido(objeto))



// Outra maneira
const escreveTextoCorrido = (objeto) => {
  return `O nome é ${objeto.nome}, a profissão é ${objeto.profissao}, o username é ${objeto.username} e a senha é ${objeto.senha}.`
}

console.log(escreveTextoCorrido(objeto))



// 3)

const funcaoTres = (objeto, callback) => {
  const propriedades = callback(objeto)
  return propriedades
}

console.log(funcaoTres(objeto, mudaPropriedadeObjetoParaCaixaAlta))
console.log(funcaoTres(objeto, escreveTextoCorrido))





  
  

  