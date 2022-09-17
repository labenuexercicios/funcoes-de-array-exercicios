// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// Código feito e explicado por Vitor em sala 
// Item I
function propToUpper(obj){
    for (let i in obj){
        //objeto[nome] = objeto[nome].toUpperCase() << para cada objeto ter suas letras em maiusculo
        obj [i] = obg[i].toUpperCase();
    }
    return obj;
}
//imprime na tela
console.log (propToUpper(objeto));
console.log(obj[i])

//Item II
function showValues(obj){
    let text =""
    for (let i in obj){
        text += `${obj[i]}`;
    }
    return text.trim(); //metodo trim para retirar o espaço de uma string
}
//imprime na tela
console.log(showValues(objeto));

//Item III
function objectToCallBack(obj,func){
    console.log(func(obj));
}
objectToCallBack(objeto, propToUpper);
//objectToCallBack(objeto, showValues);
