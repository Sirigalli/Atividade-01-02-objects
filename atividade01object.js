// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada vcores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:

let cores = ["verde", "azul", "vermelho", "cinza"]
console.log(cores[0])
console.log(cores[1])
console.log(cores[2])
console.log(cores[3])


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:


cores.push("amarelo")
cores.shift()
console.log(cores)
console.log(cores.length)



// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:


let numeros = [27, 1999, 18, 100]
console.log(`O valor de numeros armazenados é ${numeros}, a quantidade de numeros é ${numeros.length}.`)



// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:


let dados = ["texto", 27, true, undefined, null]
console.log(dados, dados.length)
let dados2 = ["String", "Number", "boolean", "undefined", "null"]
console.log(dados2, dados2.length)

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:


let dadosVariados = ["junior", 27, "toledo", "parana", "brasil"]
console.log(dadosVariados)
dadosVariados.pop()
dadosVariados.shift()
console.log(dadosVariados)
dadosVariados.push("jaragua do sul")
dadosVariados.unshift("Vila lenzi")
console.log(dadosVariados)
