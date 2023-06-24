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

//console.log (notas)

// console.log (notas [5]); //indefinido
// console.log (notas [6]); //indefinido
// console.log (notas [7]); //indefinido
// console.log (notas [8]); //indefinido
// console.log (notas [9]); //indefinido



if (notas [5] == undefined){
    notas[5] = 54;
}
// console.log ([5]== undefined); // false
// console.log (notas)

var nomes = ['Paula', 'Maria', 'Julia'];
//console.log (nomes);
nomes.push ('Vanessa');//insere o valor no final do array
//console.log (nomes);

//Tamanho de um array
//console.log (nomes.length)//4

var tam = nomes.length;
//console.log (tam)//4

var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda'];
// console.log (alunos);
alunos.sort(); //ordenando array de strings
// console.log (alunos);
//o .sort só funciona com numeros inteiros e não com numeros reais ou float

var idades = [5, 1, 8, 12, 14, 89];
idades.sort();//não funciona
//console.log (idades)

var precos = [456.89, 42.90, 90.28, 289.56]

precos.sort (function (a, b) {return a - b});
//console.log (precos)

//delete idades [3];
//console.log (idades)

// idades.splice (3 , 2); // A partir do do índice 3, delte 1 elemento
// console.log (idades);

//idades.splice (3, 0, 56, 89); // a partir do indice 3, não delete nenhum, mas adicione 56, 89
//console.log (idades)

//idades.splice (3, 1, 23); // a partir do indice 3, deleta 1 e adiciona 23
//isso seria o mesmo que fazer o seguinte comando:
// idades [3] = 23;

//Iterar em um array

for (var i = 0 ; i< idades.length; i++){
    //console.log (idades[i])
}

//Removendo elementos da última posição do array

//idades.pop();//remove e retorna o último elemento do array
//console.log (idades);

//var ret = idades.pop();
//console.log (ret);
//console.log (idades)

//removendo o primeiro elemento de um array

//idades.shift ();//remove e retorna o ultimo elemento de um array
//console.log (idades)

//var ret = idades.shift();
//console.log (ret);

//inserindo elementos no inicio de um array

//idades.unshift (99);
//console.log (idades);


//retorna um novo array a partir do índice informado

//var novo = idades.slice (3);
//console.log (novo)

// var novo = idades.slice (1, 2);// a partir do indice 1, pegue até o indice 2 sem incluí-lo
// console.log (novo)

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];
var rest = pares.concat(impares); //concatena os dois arrays
// console.log (rest);


rest = impares.concat (pares);
//console.log (rest)

rest.sort (function (a, b){return a - b});
// console.log (rest);

var tabuleiro = [[1, 2, 3, 4], [5 ,6 , 7, 8] ,[9, 10, 11, 12] , [13, 14, 15, 16]];

/*
   [
    [ 1, 2, 3, 4], //linha 0
    [ 5, 6, 7, 8], //linha 1
    [ 9, 10, 11, 12], //linha 2
    [13, 14, 15, 16] // linha 3
   ]
*/
console.log (tabuleiro [0] [0]); //linha 0 coluna 0 -> 1
console.log (tabuleiro [2] [2]); //linha 2 coluna 2 -> 11