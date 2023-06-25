let precos = [4.66, 3.78, 9.78, 1.34, 5.32];
console.log (precos)
let soma = 0;
for(let i = 0; i < precos.length; i++){
    soma = soma + precos [i];
}
//console.log (soma);

// fazendo a mesma coisa só que com foreach

soma = 0;

precos.forEach (function (valor){
    soma = soma + valor; // soma = soma + valor
});
//console.log (soma);

function somar (anterior, atual){
    return anterior + atual;
}

let ret = precos.reduce (somar);
//console.log (ret);

/*
como funciona o reduce?
[ 4.66, 3.78, 9.78, 1.34, 5.32 ]

primeira execução:
 - pega os dois primeiros valores (índice 0 e índice 1), soma e retorna este valor;
 nas demais execuções:
  - pega o retorno da execução anterior e o próximo valor (índice 2...)
1 passo ele faz = 4.66 + 3.78 ->
2 passo ele faz = 8.44 + 9.78 -> 18.22
3 passo ele faz = 18.22 + 1.34 -> 19.56
4 passo ele faz = 19.56 + 5.32 -> 24.88 (que é o resultado final)
*/

// Exemplo de map/reduce

function adicionar_taxa (valor) {
    return valor + 5;
}

let pimpa = precos.map (adicionar_taxa) .reduce (somar);
//console.log (pimpa);


//exemplo filter/map/reduce

function preco_maior_que_4(valor){
    return valor > 4;
}

ret = precos.filter (preco_maior_que_4).map(adicionar_taxa).reduce(somar)
console.log (ret);
