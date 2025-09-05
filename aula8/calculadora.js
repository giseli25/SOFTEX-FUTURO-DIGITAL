
const readline = require('readline-sync');


console.log("--- Calculadora SOFTEX ---");
console.log("-----------------------------------------");

// Loop principal que mantém a calculadora rodando
while (true) {
    // 1. Pede o primeiro número
    const inputNum1 = readline.question('Digite o primeiro numero: ');
    if (inputNum1.toLowerCase() === 'sair') {
        break; // Sai do loop se o usuário quiser
    }

    // 2. Pede o segundo número
    const inputNum2 = readline.question('Digite o segundo numero: ');
    if (inputNum2.toLowerCase() === 'sair') {
        break;
    }

    // 3. Pede a operação
    const operador = readline.question('Qual a operacao (+, -, *, /)? ');
    if (operador.toLowerCase() === 'sair') {
        break;
    }

    // 4. Converte as entradas de texto para números de verdade
    const num1 = Number(inputNum1);
    const num2 = Number(inputNum2);

    // 5. Faz as validações de segurança
    // Checa se os números são válidos
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Oxe! Um dos valores não é um número. Tenta de novo!.");
        console.log("-----------------------------------------");
        continue; // Pula para a próxima rodada do loop
    }
    
    // Checa se o operador é válido
    if (!['+', '-', '*', '/'].includes(operador)) {
        console.log(" Essa operação não existe. Use apenas +, -, * ou /.");
        console.log("-----------------------------------------");
        continue;
    }

    // 6. Se passou em tudo, faz o cálculo
    let resultado;
    if (operador === '+') {
        resultado = num1 + num2;
    } else if (operador === '-') {
        resultado = num1 - num2;
    } else if (operador === '*') {
        resultado = num1 * num2;
    } else if (operador === '/') {
        if (num2 === 0) {
            console.log(" operação invalida!");
            console.log("-----------------------------------------");
            continue; 
        }
        resultado = num1 / num2;
    }
    
    // Mostra o resultado da operação
    console.log(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
    console.log("-----------------------------------------");

    //  Pergunta se o usuário quer continuar
    const continuar = readline.question('Deseja fazer outra conta? (s/n) ');

    //  Se a resposta NÃO for 's', quebra o loop
    if (continuar.toLowerCase() !== 's') {
        break;
    }
    
    // Se for 's', o loop simplesmente recomeça!
    console.log("-----------------------------------------");
}

// Mensagem de despedida
console.log("\n-----Até a proxima!-----");