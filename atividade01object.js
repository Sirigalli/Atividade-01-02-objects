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

// ------------------------------------------------------------
// EXERCÍCIO 6 – indexOf, includes
// ------------------------------------------------------------
// a) Dado um array de nomes, verifique o índice de um nome específico.
// b) Busque por um nome específico que não existe na lista.

const nomes = ["Ana", "Bruno", "Carolina", "Daniel", "Eduardo"];
// → Seu código aqui:


console.log(nomes.indexOf("Bruno"));
console.log(nomes.indexOf("Carlos"));
const existeFernando = nomes.includes("Fernando");
console.log(existeFernando);
const existeAna = nomes.includes("Ana");
console.log(existeAna);

nomes.includes


// ------------------------------------------------------------
// EXERCÍCIO 7 – slice, concat
// ------------------------------------------------------------
// a) Dado dois arrays de letras, junte os 2 em um só usando concat() e exiba o resultado.
// b) Use slice para criar uma nova array, contendo somente os elementos entre a 2ª e a 4ª posição
//    do array que você criou usando o concat() e exiba o resultado.

const letras1 = ["a", "b", "c", "d", "e"];
const letras2 = ["f", "g"];
// → Seu código aqui:


const letras3 = letras1.concat(letras2);
console.log(letras3);
const letras4 = letras3.slice(1,4);
console.log(letras4);




// ------------------------------------------------------------
// EXERCÍCIO 8 – arrays aninhados (array dentro de array) e flat
// ------------------------------------------------------------
// a) Crie um array aninhado, ebixa-o. Acesso elementos internos deste array.
// b) Use flat para achatar o array em um unico nível (os arrays internos se tornam elementos individuais) e exiba-o.

// → Seu código aqui:


let dados1 = [
    ["html" , "javaScript"],
    ["C++" , "C#"],
    ["Java" , "Python"],
];
console.log(dados1);
console.log(dados1[0]);
console.log(dados1[1]);
console.log(dados1[2]);

const achatado = dados1.flat();
console.log(achatado);



const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 28 },
    { id: 3, name: "Bob Johnson", age: 35 }
];
console.table(users);