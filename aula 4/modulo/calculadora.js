/*******************************************
 * Objetivo: Arquivo de função para calcular uma tabuada de um numero até um contador qualquer
 * Data:06/02/2023
 * Autor: Miguel Joaquim
 * versão:1.0
 * 
 * 
 **************************************************/

 //calcula uma tabuada

 const tabuada = function (multiplicando, maxMultiplicador){
    let tabuada = multiplicando
    let contador = maxMultiplicador
    let contTabuada = 0;
    let status = true;
    let resultado;

    if(tabuada == 0 || contador == 0)
    status = false

    else if(isNaN(tabuada) || isNaN(contador))
    status = false

    else{

       while(contTabuada <= contador)
       {
           resultado = tabuada * contTabuada

           //2X0 = 0
           console.log (`${tabuada} x  ${contTabuada}  =  ${resultado}`)
           // contTabuada = contTabuada + 1;
           // contTabuada ++;
           contTabuada +=1; 
       }
    }
    return status;
}
tabuada(10,10000);

module.exports = {
    tabuada
}