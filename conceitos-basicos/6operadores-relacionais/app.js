//Os operadores mais comuns são

/*
Igual a ==
Diferente de !=
Maior que >
Menor que <
Maior ou igual a >=
Menor ou igual a <=

Igual e do mesmo tipo que ===
Diferente e de outro tipo que !==
*/

let n1 = 54;
let n2 = 78;

console.log (n1 == n2);//false
console.log (n1 !=n2);//true
console.log (n1 > n2);//false
console.log (n1 < n2);//true
console.log (n1 >= n2);//false
console.log (n1 <= n2);//true
console.log (n1 === n2);//false
console.log (n1 !== n2);//true

if (n1 > n2){
    console.log ("N1 é maior que n2");
}else{
    console.log ("N1 é menor que n2");
}