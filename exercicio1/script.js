const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function upper(objs) {
    for (i in objs) {
        console.log(i, ": ", objs[i].toUpperCase())
    }
}

function text(objs) {
    let txt = '';
    for (i in objs) {
        txt += `${objs[i]} `
    }
    return txt
}

upper(objeto)
console.log('\n', text(objeto), '\n')

const funcao3 = (valor, upper) => {
    const resultado = upper(valor)
    return resultado
}

funcao3(objeto, upper)

const funcao4 = (valor, txt) => {
    const res = txt(valor)
    return res
}

const f4 = funcao4(objeto, text)
console.log('\n', f4)