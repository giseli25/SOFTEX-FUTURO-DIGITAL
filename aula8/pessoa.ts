class Pessoa {
    cpf: string;
    nome: string;
    endereco: string;
    corDePele: string;
    dataDeNascimento: string;

    // O "construtor" é a receita para criar uma nova pessoa.
    constructor(cpf, nome, endereco, corDePele, dataDeNascimento) {
        this.cpf = cpf;
        this.nome = nome;
        this.endereco = endereco;
        this.corDePele = corDePele;
        this.dataDeNascimento = dataDeNascimento;
    }

    // Estas são as ações (métodos) que uma Pessoa pode fazer
    apresentar() {
        console.log(`Opa! Meu nome é ${this.nome} e eu moro em ${this.endereco}.`);
    }

    dormir() {
        console.log(`${this.nome} foi dormir... Zzzzzzzzzzzzzzzz`);
    }

    andar() {
        console.log(`${this.nome} está andando por aí...`);
    }
}

// --- AGORA VAMOS USAR A CLASSE COM OS NOMES QUE VOCÊ PEDIU ---

// Criando a pessoa "Giseli"
const pessoa1 = new Pessoa(
    '111.222.333-44', 
    'Giseli', 
    'Jaboatão dos Guararapes, PE', 
    'Parda', 
    '15/05/1995'
);

// Criando a pessoa "Maria"
const pessoa2 = new Pessoa(
    '555.666.777-88', 
    'Maria', 
    'Olinda, PE', 
    'Negra', 
    '20/08/1990'
);



console.log("--- Ações da Giseli ---");
pessoa1.apresentar();
pessoa1.andar();

// Mandando a Maria fazer suas ações
console.log("\n--- Ações da Maria ---"); 
pessoa2.apresentar();
pessoa2.dormir();

console.log("\n--- Detalhes de Giseli ---");
console.log(pessoa1);