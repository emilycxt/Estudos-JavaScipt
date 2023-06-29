function somar (num1, num2){
    return num1 + num2;
}

let res = somar (4, 6);
// console.log (res);

// console.log (somar (90, 9));

// Exemplo 1

const executar = somar;

//console.log (executar (8, 7));

// Exemplo 2

function subtrair (num1,num2){
    return num1 - num2;
}

function faz_algo (num1, num2, funcao){
    return funcao (num1, num1);
}

// console.log (faz_algo (5, 5, somar));
// console.log (faz_algo (8, 3, subtrair));

function outra (funcao){
    return funcao;
}

const ret = outra (somar);
//console.log (ret(8, 2));

/*
Cidadãos de primera classe
First-Class Citizens
Higher-Order Function
*/

function mensagem (){
    console.log ('Evolua seu lado Geek!')
}

// mensagem ();

let valores = [1, 3.4, true, somar]

for (let i = 0; i < valores.length; i++){
    console.log (typeof(valores[i]));
}
