// A gente chama a ferramenta e dá o apelido de 'readline'
let readline = require('readline-sync');

console.log('-------------------------------------------------');
console.log('|           Formulário de Cadastro            |');
console.log('-------------------------------------------------');

// --- Dados Pessoais ---
let nome = readline.question('Qual seu Nome Completo: ');
let idade = readline.questionInt('Qual a sua idade? ');

// --- Contato ---
let email = readline.question('E-mail: ');
let telefone = readline.question('Telefone : ');

// --- Endereço Completo ---
console.log('Qual seu endereco? :  ');
let rua = readline.question('Rua/Avenida: ');
let numeroCasa = readline.question('Numero: ');
let bairro = readline.question('Bairro: ');
let cidade = readline.question('Cidade: ');
let estado = readline.question('Estado (ex: PE): ');
let cep = readline.question('CEP: ');

// --- Outras Informações ---
let hobby = readline.question('Qual seu principal hobby? ');
let temAnimal = readline.question('Tem animal de estimacao? (S para Sim / N para Nao) ');

.
let linhaResumoAnimais = ''; 

if (temAnimal === 'S') {
  let quantidadeAnimais = readline.questionInt('Quantos? ');
  
  linhaResumoAnimais = `  - Possui Animais: Sim (${quantidadeAnimais})`;
}


console.log('\n\n=================================================');
console.log('|         FICHA DE CADASTRO PREENCHIDA        |');
console.log('=================================================\n');

console.log('\nDADOS PESSOAIS:');
console.log(`  - Nome Completo: ${nome}`);
console.log(`  - Idade: ${idade} anos`);

console.log('\nCONTATO:');
console.log(`  - E-mail: ${email}`);
console.log(`  - Telefone: ${telefone}`);

console.log('\nENDERECO:');
console.log(`  - ${rua}, No ${numeroCasa}`);
console.log(`  - Bairro: ${bairro}`);
console.log(`  - Cidade/Estado: ${cidade}/${estado}`);
console.log(`  - CEP: ${cep}`);

console.log(`  - Hobby Principal: ${hobby}`);


if (linhaResumoAnimais) {
    console.log(linhaResumoAnimais);
}


console.log('\n-------------------------------------------------');
console.log('           Cadastro finalizado!                ');
console.log('-------------------------------------------------');