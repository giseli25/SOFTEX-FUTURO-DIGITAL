// --- Passo 1: Criando a minha  lista de tarefas ---
// O Array é a nossa "lista de afazeres". Cada tarefa é um texto (string).
const tarefasDeCasa = [
    "Varrer a casa",
    "Lavar os pratos do almoço",
    "fazer o almoço",
    "limpar a geladeira",
    "Botar a roupa pra bater na máquina",
    "Passar um pano no chão",
    "Tirar o lixo pra fora"
    
];

console.log("--- Minha Lista de Tarefas para Hoje ---");
console.log(`Oxe! Tenho ${tarefasDeCasa.length} coisas pra fazer hoje. Que aperreio!`);
console.log("-----------------------------------------");

// --- Passo 2: "Executando" as tarefas com o loop for ---
// Este loop vai passar por cada tarefa da lista, uma de cada vez.
for (let i = 0; i < tarefasDeCasa.length; i++) {
    // A variável 'i' é um contador que começa em 0 e vai até o tamanho da lista.
    // 'tarefasDeCasa[i]' pega a tarefa na posição atual do contador.
    const tarefaAtual = tarefasDeCasa[i];

    // Mostra na tela qual tarefa está sendo feita.
    console.log(`Começando a tarefa ${i + 1}: ${tarefaAtual}...`);

    console.log(`... Tarefa "${tarefaAtual}" concluída!`);
    console.log(" "); // Pula uma linha pra ficar mais organizado
}

// --- Passo 3: Fim do expediente ---
console.log("-----------------------------------------");
console.log("Ufa! Acabei tudo. Agora um suquinho de cajá pra relaxar!");