const curso = {
    nome: 'Porgramação em JavaScript',
    horas: 25,
    preco: 27.99
}

//  console.log (curso);

// console.log (typeof(curso));

//Acessando chaves

// console.log (Object.keys(curso));

//Acessando valores

// console.log (Object.values(curso));

//Acessando tudo

// console.log (Object.entries(curso));

//acessando chaves e valores sem formar arrays

// Object.entries (curso).forEach(par =>{
//     console.log (`${par[0]} : ${par[1]}`);
// });

//Outra forma de fazer a mesma coisa de cima (acessar chaves e valores)
// Object.entries (curso).forEach (([chave, valor])=>{
//     console.log (`${chave} : ${valor}`);
// });

//Acrescentando atributos sem modificar o objeto

// Object.defineProperties(curso, {
//     publicao: {
//         enumerable: true,
//         writable: false,
//         value: '07/12/2019'
//     }
// });

// console.log (curso);


// //Não permite alterações (freeze)
// Object.freeze (curso);

// curso.nome = 'Dança da Garrafa';

// console.log (curso);

//fazendo um arrays de objetos
const usuarios = [
    {nome : 'Aline Moraes', empresa: 'Geek University'},
    {nome : 'Ricardo Brandão', empresa: 'Google'},
    {nome : 'Felipe Xavier', empresa: 'Sony'},
]

// console.log (usuarios);

// //visualizando em forma de tabela

// console.table (usuarios);

console.table (curso);