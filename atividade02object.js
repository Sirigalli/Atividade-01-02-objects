// ============================================================
//   ATIVIDADE 02 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:


let aluno = {
    nome: "junior",

    idade: 26,

    curso: "Desenvolvimento de sistemas"
}
console.log(aluno.nome)




// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:


aluno.endereco = "rua marcelo barbi"
aluno.cidade = "jaragua do sul"
console.log(aluno.endereco)
console.log(aluno.cidade)


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:


aluno.habilidades = ["javascript", "java", "c++"]
console.log(aluno.habilidades[0]);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:


aluno.notas = [6, 8, 10, 9]
console.log(aluno.notas)
console.log(`O aluno ${aluno.nome}, tirou as notas: ${aluno.notas}.`)




// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:


aluno.responsavel = ["Pai = Emerson"]
console.log(aluno.responsavel)
aluno.responsavel = ["Mae = Olivia"]
console.log(aluno.responsavel)
console.log("Responsavel:", aluno.responsavel)

aluno.responsavel = {
    nome: "emerson",
    parentesco: "pai",
}

console.log("Responsavel:", aluno.responsavel.nome)
console.log("Responsavel:", aluno.responsavel.parentesco)



// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

let listaDeAluno = []
    
let aluno1 = {
    nome: "junior",

    idade: 26,

    curso: "programacao"
}

listaDeAluno.push(aluno1)

let aluno2 = {
    nome: "Leandro",

    idade: 28,

    curso: "programacao"
}
let aluno3 = {
    nome: "Fillipi",

    idade: 34,

    curso: "programacao"
}

listaDeAluno.push(aluno2)

listaDeAluno.push(aluno3)

console.log(listaDeAluno[1].nome);
console.log("Segundo aluno:", listaDeAluno[1].nome);





