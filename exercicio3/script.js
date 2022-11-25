const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]
 

 const novaFuncao = produtos.filter((elementos) =>
    elementos.categoria ==="Limpeza")

    console.log(novaFuncao)

    //EXTRA 
    const produtosMaiores = produtos.filter((elementos)=>elementos.preco >7.00)
 
    console.log(produtosMaiores)

    const produtosBaixo = produtos.filter((elementos)=>elementos.preco < 7.00)
    console.log(produtosBaixo)

    const produtosNomes = produtos.map((elementos)=> `O produto é ${elementos.nome}, e custa ${elementos.preco}`)
    console.log(produtosNomes)


//Vamos somar o valor total os produtos no array acima.
// Crie uma variavel precoTotal e atribua 0 a ela.
// Utilize o for of para percorrer todos os produtos
// dentro do escopo do for faça a soma para saber o valor total dos produtos


let i = 0
for (let i of produtos){
     i=i+produtos.preco

}    
 console.log(`o preco total ficou ${i}`)
