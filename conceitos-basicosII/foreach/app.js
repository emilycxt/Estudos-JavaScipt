var cursos = [
    'Programação para Leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
]

// console.log (cursos);
// console.log (cursos.length);

//definir uma função

function imprimir (curso, indice,) {
    console.log (indice + ' - ' + curso);
   
}

//para cada
// cursos.forEach (imprimir);

//Utilização de uma função anonima (lambda/callback) e templete string

// cursos.forEach (function (cursos, indice){
//     console.log ('$ {indice} - ${curso}');
// });

for (var i = 0; i < cursos.length; i++){
    console.log (i + ' - ' + cursos [i]);

}