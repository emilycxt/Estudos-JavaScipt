const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]

function aprensentar(curso, indice){
    console.log (`${indice + 1} - ${curso}`);
}

// cursos.forEach (aprensentar); // Aqui está ocorrendo o callback

// // usando Lambda

// cursos.forEach (function(curso, indice){
//     console.log (`${indice + 1} - ${curso}`);
// })

// // usando arrow
// cursos.forEach ((curso,indice) => console.log (`${indice + 1} - ${curso}`));

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = []

for (let i = 0; i < precos.length; i++){
    if (precos [i] < 50){
        menores.push(precos[i]);
    }
}

for (let p in precos){
    if (precos [p] < 50){
        menores.push(precos[p]);
    }
}

//console.log (menores)

// Forma 1

menores = precos.filter (function(preco){
    return preco < 50;
})

console.log (menores);

// Forma 2

menores = precos.filter (precos => precos < 50);

console.log (menores);