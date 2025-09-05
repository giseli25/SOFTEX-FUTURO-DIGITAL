const readline = require('readline-sync');

let num1 = (readline.question("Digite o primeiro número: "));
let operacao = readline.question("Digite a operação (+, -, *, /): ");
let num2 = (readline.question("Digite o segundo número: "));
let resultado;

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        console.log(`${num1} + ${num2} = ${resultado}`);
        break;

    case "-":
        resultado = num1 - num2;
        console.log(`${num1} - ${num2} = ${resultado}`);
        break;

    case "*":
        resultado = num1 * num2;
        console.log(`${num1} * ${num2} = ${resultado}`);
        break;

    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2;
            console.log(`${num1} / ${num2} = ${resultado}`);
        } else {
            console.log("Erro: divisão por zero!");
        }
        break;

    default:
        console.log("Operação inválida! Use +, -, * ou /");
}


let atua = "teste"

console.log(atua)

console.log("NOSSAAAA GIT CHATO")