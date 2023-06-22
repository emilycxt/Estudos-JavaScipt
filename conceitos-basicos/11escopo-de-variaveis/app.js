//escopo de variáveis

 function somar (num1, num2){
     let valor = 5;//variavel local (só é reconhecida dentro do bloco da função)
     return valor + num1 + num2;
}
 //console.log (somar(4, 6));

for (let i = 0; i < 5; i++){
    let outra = 5;//variavel local
    //console.log (i * outra);
}

let exemplo = 1; //variavel global

//console.log (outra);

for (var j = 0; j < 5; j++){
    let uma = 12;
    //console.log (j * uma);
}

console.log (uma); //O let ele não mostra (variavel local)
console.log (j); // O var ele mostra (variavel global)