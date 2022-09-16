/*
Crie duas funcões que recebem como parâmetro um objeto.
1. A primeira deve retornar o objeto, alterando as propriedades dele
 para que fiquem em CAIXA ALTA.
*/

const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

function textoMaiusculo(obj) {
  for (let i in obj) {
    obj[i] = obj[i].toUpperCase();
    console.log(i);
  }
  return obj;
}
console.log(textoMaiusculo(objeto));

// 2. A segunda deve retornar os valores do objeto como texto corrido.

function valores(obj) {
  let texto = "";
  for (let i in obj) {
    obj[i] += `${obj[i]}`;
  }
  return texto.trim();
}
console.log(valores(objeto))

/*
3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
A funcão deve passar o objeto como argumento da funcão de callback, 
e em seguida imprimir o valor retornado.
*/

function objetoCallBack(obj, func){
    console.log(func(obj))
}

/*
Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2
*/

objetoCallBack(objeto, textoMaiusculo)
objetoCallBack(objeto, valores)