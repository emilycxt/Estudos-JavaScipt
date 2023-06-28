// console.log (nome); //ReferenceError

// console.log ('oiii'); //Parte do código que não irá executar caso haja erro em códigos acima

//  console.log (4.Oi()) //SyntaxError


// Para tratar erros utilizamos o Try/catch

// try{
//     console.log (nome);
// }catch (e){
//     console.log ("Não foi possível imprimir Nome.")
//     console.log (e.name);
//     console.log (e.message);
// }

// console.log ('Oiie...')

//Lançando Erros

function dividir (num1, num2){
    if (num1 === 0 || num2 === 0 ){
        throw("Os valores devem ser positivos")//Lançando uma exceção (erro)
    }else {
        return num1 / num2;
    }
}

try{ let ret = dividir (8, 2);
console.log (ret);
}catch (e){
    console.log ('Não foi pssível dividir.')
}finally{
    console.log ('Vamos continuar...')
}