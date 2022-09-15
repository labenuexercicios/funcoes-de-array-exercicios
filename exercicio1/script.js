const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Item 1
function propToUpper(obj) {
    for (let i in obj) {
      obj[i] = obj[i].toUpperCase();
    }
    return obj;
  }
  
  //Item 2
  function showValues(obj) {
    let text = "";
    for (let i in obj) {
      text += `${obj[i]} `;
    }
    return text.trim();
  }
  
  //Item 3
  function objectToCallback(obj, func) {
    console.log(func(obj));
  }
  
  objectToCallback(objeto, propToUpper);
  objectToCallback(objeto, showValues);