/*
array contendo 5 elementos -> n (o tamanho do array) = 5
//índices -> posição do elemento no array
[0] [1] [2] [3] [4]

//valores em um array

[12] [24] [36] [48] [58]

//detalhes sobre arrays
- possuem tamanho infinito* -- dependendo da memoria do pc--
- podemos colocar qualquer tipo de dado
*/

//forma 1

var alunos = new Array ('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
// console.log (alunos);


//forma 2

var notas = [1, 3, 5, 7, 9]
//console.log (notas)

//criando um array vazio

var dados = [];
//console.log (dados)

//fazendo acesso ao valor de um índice

//console.log (notas [2]);

//alterando o valor a partir do índice

notas [2] = 12;

//console.log (notas);

//Atenção ao acessar um valor com um índice que não existe

notas [9] = 10;

console.log (notas)