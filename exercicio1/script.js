const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
} 



const transformaObjeto = (array) => {
return{
    nome:array.nome.toUpperCase(),
    profissao:array.profissao.toUpperCase(),
    username:array.username.toUpperCase(),
    senha:array.senha.toUpperCase(),
}
}
console.log(transformaObjeto(objeto)) 

const transformaObjeto2 = (array) => {
    let texto = `${array.nome} ${array.profissao} ${array.username } ${array.senha}`
return texto

} 
console.log(transformaObjeto2(objeto)) 



const CBack = (objeto, callback) => {
    console.log(callback(objeto))
}

CBack(objeto, transformaObjeto)
CBack(objeto, transformaObjeto2)