// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as 
// propriedades dele para que fiquem em CAIXA ALTA.

// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
// A funcão deve passar o objeto como argumento da funcão de callback, 
// e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, 
// e a funcão 1. Repita o processo para a funcão 2

const objetoA018 = {
    nome: " astrodev ",
    profissao: " Dev das estrelas ",
    username: " astrodev_labenu ",
    senha: " melhorDeTodos "
}

function caixaAlta(objeto)
{
    for(elementos in objeto)
    {
        objeto[elementos] = objeto[elementos].toUpperCase() //precisa ser na notação de objeto com colchetes, não pode ser com ponto
    }
    return objeto
    
}

function textoCorrido(objeto)
{
    for(elementos in objeto)
    {
        for(i in objeto)
        {
        text = []
        text += `${objeto[elementos]}`
        }
        return text
    }
    
}

function recebeCallback(objeto, callback)
{
    console.log(callback(objeto))
}

recebeCallback(objetoA018, caixaAlta)
recebeCallback(objetoA018, textoCorrido) //