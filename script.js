//ATIVIDADE 1

// function verticalText (texto){
//     for(i = 0; i < texto.length; i++){
//         console.log(texto[i]);
//     }

// }
// verticalText('FRONTEND');


//ATIVIDADE 2

// function incrementText(texto){
//     let resultado = '';

//     for(i = 0; i < texto.length; i++){
//         resultado += texto[i]
//         console.log(resultado)
//     }
        
// }
// incrementText('FRONTEND');


//ATIVIDADE 3

// function incrementTextBackwards(texto){
//     let resultado = '';
//     let inicioIndice = texto.length -1;

//     for(i = inicioIndice; i >= 0; i--){
//         resultado = texto[i] + resultado
//         console.log(resultado)
//     }
// }
// incrementTextBackwards('FRONTEND');

//ATIVIDADE 4  

// function padEnd(texto, numRep, textoRep){
//     let resultado = texto;
//     for (i = 0; i < numRep; i++){
//         resultado += textoRep
//     }
//     return resultado
// }
// console.log(padEnd("Kenzie ", 5, "foo "));
// console.log(padEnd("Kata ", 8, "*"));

//ATIVIDADE 5

// function subString(texto, numInicio, numFim){
//     let resultado = '';
//     for (i = 0; i < texto.length; i++){
//         if (i > numInicio && i < numFim){
//             resultado += texto[i];
//         }
//     }
//     return resultado
// }
// console.log(subString("Mozilla", 0, 4));
// console.log(subString("Chrome", 3, 5));

//ATIVIDADE 6

// function stringRepeater(palavraOuFrase, numRepete){
//     let resultado = '';

//     for (i = 0; i < numRepete; i++){
//         resultado += palavraOuFrase;

//     }
//     return resultado;
// }

// console.log(stringRepeater("Hello Word!. ", 3));

//ATIVIDADE 7

function stringCentralizer(texto, numRep, textoRep){
    let resultado = ` ${texto} `;

    for (i = 0; i < numRep; i++){
        resultado =  textoRep + resultado + textoRep;
    }
    return resultado
}

console.log(stringCentralizer("JavaScript", 8, "="));
