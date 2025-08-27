let readline = require('readline-sync');

//Exercicio 1
// Passo 1: Criando o array com os times de futebol
let timesDeFutebol = ["Sport", "Santa Cruz", "Náutico", "Salgueiro"];

// Passo 2: Imprimindo o primeiro time no console
console.log("Primeiro time:", timesDeFutebol[0]);

// Passo 3: Imprimindo o último time no console
console.log("Último time:", timesDeFutebol[timesDeFutebol.length - 1]);


//Exercicio 2
// Passo 1: Criando um array vazio pra botar as tarefas
const minhaListaDeTarefas = [];

// Passo 2: Adicionando as tarefas uma por uma com o .push()

minhaListaDeTarefas.push("Comprar pão");
minhaListaDeTarefas.push("Estudar JavaScript");
minhaListaDeTarefas.push("Fazer exercícios");

// Passo 3: Imprimindo a lista completa pra ver o resultado da resenha
console.log("Minha lista de tarefas:", minhaListaDeTarefas);

//Exercicio 3
// Passo 1: Criando o array com os bichos
let animais = ["Capivara", "Galinha", "Cachorro", "boi", "Calango"];
// Passo 2:Usando o laço de repetição for tradicional, percorra o array e, para cada animal, imprima a seguinte frase no console: "O animal na posição [índice] é [nome do animal]".

for (let i = 0; i < animais.length; i++) {
  // Passo 3: Imprimindo a frase no console pra cada animal
  console.log(`O animal na posição ${i} é ${animais[i]}`);
  
}


//Exercício 4
// Crie um array chamado numeros com pelo menos 10 números, misturando pares e ímpares 
let numeros = [7, 12, 5, 20, 15, 8, 3, 22, 11, 4];
console.log("Os números pares da lista são:");
// Passo 2: Usando o laço de repetição for, percorra o array.
for (let i = 0; i < numeros.length; i++) {
    const numeroAtual = numeros[i];
 // Dentro do laço, use uma estrutura if para verificar se o número atual é par.
  if (numeroAtual % 2 === 0) {
// Passo 4: Se o número for par, imprima-o no console.
    console.log(numeroAtual);
    
  }
}

//Exercício 5
// Passo 1: Crie um array chamado frutas com as seguintes palavras: "maçã", "banana", "uva", "morango", "abacaxi".
let frutas = ["maçã", "banana", "uva", "morango", "abacaxi"];
let i = 0;
console.log("--- Minhas Frutas ---");
// Passo 2: Usando o laço de repetição while, percorra o array e imprima cada fruta no console
while (i < frutas.length) {
  console.log(frutas[i]);
  i++; 
}
//Passo 3: Ao final do código, imprima a mensagem: "Fim do Desafio!
console.log("Fim do Desafio!");
console.log("Gerando as tabuadas de 2 a 9...");


//Exercício 6
// Usando laços de repetição aninhados (um laço for dentro de outro), crie um programa que imprima as tabuadas de multiplicação do número 2 até o número 9.

for (let tabuada = 2; tabuada <= 9; tabuada++) {
  
  // Isso aqui é só pra ficar bonito, pra separar uma tabuada da outra.
  // O '\n' pula uma linha.
  console.log(`\n--- Tabuada do ${tabuada} ---`);
  
  // Laço de Dentro (o "Trabalhador"):
  // Para CADA número do laço de fora, esse aqui vai rodar 10 vezes (de 1 a 10).
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    
    // Calcula o resultado da continha
    const resultado = tabuada * multiplicador;
    
    // O programa deve imprimir cada tabuada em uma linha separada, começando de [número] x 1 até [número] x 10.
    console.log(`${tabuada} x ${multiplicador} = ${resultado}`);
    
  }
}