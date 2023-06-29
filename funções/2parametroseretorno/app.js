function calcular_idade (ano_nascimento){
    const data = new Date(); // gera a data atual
    
    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento

    console.log (idade)
}

let ret = calcular_idade (2002);
// console.log (ret);

// calcular_idade2 (2002);

const data = new Date();

// console.log ("Data completa: " + data);

// console.log ('Ano: ' + data.getFullYear());

// console.log ('Mês: ' + data.getMonth()); // 0 para janeiro, 1 para fev

//Fique esperto!

function somar (num1, num2){
    return num1 + num2;
}

console.log (somar(4,6));//10
console.log (somar(4));// NaN - Not a Number
console.log (somar(4,6,8))//10 ele só soma os dois e ignora o ultimo
console.log (somar(4, 6, 8, 3, 2, 1, 19)); //10 ele ignorou o resto...