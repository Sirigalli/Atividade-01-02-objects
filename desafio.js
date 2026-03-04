// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:


console.log(frutas[0])
console.log(frutas[1])
frutas[1] = "abacaxi"
console.log(frutas[1])



// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:


let Array = [
    letras1[0],
    letras1[2],
    letras1[5],
]
console.log(Array)
let Array1 = [
    letras1[4],
    letras1[5],
]
console.log(Array1)




// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.


const potato = [
    letras2[1],
    letras2[0],
    letras2[5],
    letras2[0],
    letras2[5],
    letras2[0],
]
console.log(potato)

// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { nome: 'Junin', idade: 22, cidade: 'Porto Alegre' };
// a) Acesse e exiba a propriedade 'nome' e 'cidade'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' por atribuição direta.

// → Seu código aqui:


console.log(pessoa.nome, pessoa.cidade)
pessoa.curso = "programacao"
console.log(pessoa.curso)



// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
  usuario: 'ana123',
  dados: { nome: 'Ana', idade: 19 },
  interesses: ['música', 'fotografia', 'viagens']
};
// a) Acesse o nome dentro de 'dados' e o segundo interesse.
// b) Altere o primeiro interesse para 'arte' por atribuição direta.

// → Seu código aqui:


console.log(perfil.dados.nome, perfil.interesses[1])
perfil.interesses[0] = "arte"
console.log(perfil.interesses)


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo id, nome e preço.
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos e os valores são o nome
// e os valores são os objetos de produto correspondentes (sem usar loops ou funções).

// → Seu código aqui:


const produtos = {
    bebida: { id: 'whisky', nome: 'jack daniels', preco: 199 },
    comida: { id: 'salgadinho' , nome: 'doritos', preco: 18 },
    fruta: { id: 'mamao', nome: 'papaya', preco: 7.99 },
  };
const catalogo = {
    whisky: [produtos.bebida.nome],
    salgadinho: [produtos.comida.nome],
    mamao: [produtos.fruta.nome],
  }
console.log(produtos)
console.log(catalogo)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas

// → Seu código aqui:


let tarefas = [
    { id: 1, titulo: "Estudar JavaScript", concluida: false },
    { id: 2, titulo: "Treinar na academia", concluida: false },
    { id: 3, titulo: "Trabalhar com vendas", concluida: false }
];

tarefas[1].concluida = true;
console.log(tarefas[1].concluida) 
console.log(tarefas);

let tarefasPendentes = {
    pendente1: tarefas[0],
    pendente2: tarefas[2],
}
console.log(tarefasPendentes)
