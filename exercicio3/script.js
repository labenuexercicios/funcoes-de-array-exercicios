/*Exercício 3

Dado um array de produtos, onde cada produto é um objeto 
com nome, preço e categoria, retorne um novo array com o
nome dos produtos da categoria Limpeza.*/
/**
 * Dada una matriz de productos, donde cada producto es 
 * un objeto con nombre, precio y categoría, devuelve una
 *  nueva matriz con el nombre de los productos en la 
 * categoría Limpieza.
 */

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


const functionFilter = productos.filter((elementos) => {
    elementos.categoria === "limpieza"
})

console.log(functionFilter)

//Vamos somar o valor total os produtos no array acima.
// Crie uma variavel precoTotal e atribua 0 a ela.
// Utilize o for of para percorrer todos os produtos
// dentro do escopo do for faça a soma para saber o valor total dos produtos

let i = 0
for (let i of productos) {
    i = i + productos.preco
}
console.log(`o preco total ficou ${i}`)