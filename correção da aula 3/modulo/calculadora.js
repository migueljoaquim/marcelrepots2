/*****************************************************************************************
 * Objetivo: Arquivo de funções para realizar calculos matematicos 
 * DATA : 03/02/2023
 * AUTOR: Miguel
 * Versão: 1.0
 * 
 ************************************************************************************/

//Realizar calculo matematico das 4 operações (SOMAR, SUBTRAIR. MULTIPLICAR E DIVIDIR)
// function calcular(Numero1, Numero2, tipoCalculo) {

//     let Valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo.toUpperCase();

//     let resultado;

//     let status = true //variavel booleano 


//     // if (operacao == 'SoMaR') {

//     //     resultado = Number(Valor1) + Number(valor2);
//     // } else if (operacao == 'SUBTRAIR') {

//     //     resultado = Number(Valor1) - Number(valor2)
//     // } else if (operacao == 'MULTIPLICAR') {

//     //     resultado = Number(Valor1) * Number(valor2);
//     // } else if (operacao == 'DIVIDIR') {

//     //     //Validação da divisão por 0
//     //     if (valor2 == 0) {
//     //         console.log('ERRO: Não é possivel fazer uma divisão por 0.');
//     //        status = false;
//     //     } else
//     //         resultado = Number(Valor1) / Number(valor2);
//     // } else {
//     //     console.log('ERRO: A opercao informada não é valida. confira a sua entrada')
//     //     status = false; //frcha o objeivo da entra de (encerrar o programa )
//     // }

//     switch (operacao){
//         case 'SOMAR':
//             resultado = Number(Valor1) + Number(valor2);
//             break;

//         case 'SUBTRAIR':
//             resultado = Number(Valor1) - Number(valor2)
//             break;

//         case 'MULTIPLICAR':
//             resultado = Number(Valor1) * Number(valor2);
//             break;

//         case 'DIVIDIR':
//             if (valor2 == 0) {
//              console.log('ERRO: Não é possivel fazer uma divisão por 0.');
//               status = false;
//                 } else
//                 resultado = Number(Valor1) / Number(valor2);

//                 break;

//                 //similar ao else final de uma estrutura baseada em if / else (se nenhuma das ações for 
//                 // Verdadeiro sempre passara)
//                 default: 
//                 console.log('ERRO: A opercao informada não é valida. confira a sua entrada')
//                   status = false;
//     }



//     //validação para tratar a variavel resultado quando nenhum caculo é relizado
//     if (resultado != undefined)
//         return resultado;

//     else

//         return status;



// }

const calcular = function (numero1,numero2, tipoCalculo){
    let Valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;

    let status = true //variavel booleano 


    // if (operacao == 'SoMaR') {

    //     resultado = Number(Valor1) + Number(valor2);
    // } else if (operacao == 'SUBTRAIR') {

    //     resultado = Number(Valor1) - Number(valor2)
    // } else if (operacao == 'MULTIPLICAR') {

    //     resultado = Number(Valor1) * Number(valor2);
    // } else if (operacao == 'DIVIDIR') {

    //     //Validação da divisão por 0
    //     if (valor2 == 0) {
    //         console.log('ERRO: Não é possivel fazer uma divisão por 0.');
    //        status = false;
    //     } else
    //         resultado = Number(Valor1) / Number(valor2);
    // } else {
    //     console.log('ERRO: A opercao informada não é valida. confira a sua entrada')
    //     status = false; //frcha o objeivo da entra de (encerrar o programa )
    // }

    switch (operacao){
        case 'SOMAR':
            resultado = SOMAR (Valor1,valor2);
            break;

        case 'SUBTRAIR':
            resultado = SUBTRAIR (Valor1, valor2);
            break;

        case 'MULTIPLICAR':
            resultado = MULTIPLICAR (Valor1, valor2);
            break;

        case 'DIVIDIR':
            if (valor2 == 0) {
             console.log('ERRO: Não é possivel fazer uma divisão por 0.');
              status = false;
                } else
                resultado = DIVIDIR (Valor1, valor2);

                break;

                //similar ao else final de uma estrutura baseada em if / else (se nenhuma das ações for 
                // Verdadeiro sempre passara)
                default: 
                console.log('ERRO: A opercao informada não é valida. confira a sua entrada')
                  status = false;
    }



    //validação para tratar a variavel resultado quando nenhum caculo é relizado
    if (resultado != undefined)
        return resultado;

    else

        return status;



}

//forma 3 de se criar uma função rm js(modelo arrow function)
const SOMAR = (Valor1, valor2) => Number(Valor1)  + Number(valor2) ;
const SUBTRAIR = (Valor1, valor2) => Number(Valor1)  - Number(valor2) ;
const MULTIPLICAR = (Valor1, valor2) => Number(Valor1)  * Number(valor2) ;
const DIVIDIR = (Valor1, valor2) => Number(Valor1)  / Number(valor2) ;



//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular

}