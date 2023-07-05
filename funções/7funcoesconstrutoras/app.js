// Criando uma função construtora
function Pessoa(n, s, raca = 'Humano') {
    // Atributos Privados, só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    // método privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function() {
        console.log(`Nome: ${nome}, idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo},
        Raça: ${raca}`);
    }

    // método público conseguimos acessar fora da função construtora
    this.fazer_aniversário = function() {
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function() {
        return idade;
    }
}

// Instanciando um objeto
const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina); // privado

console.log(angelina.raca); // publico

angelina.fazer_aniversário(); // público
angelina.fazer_aniversário(); // público

// Instanciar um novo objeto
const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversário();
console.log(felicity.getIdade()); // acessando idade corretamente

console.log (typeof (Pessoa));
console.log (typeof(felicity));
