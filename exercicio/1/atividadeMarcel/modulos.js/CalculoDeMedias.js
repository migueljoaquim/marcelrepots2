/*****************************************************************************************
 * Objetivo: Arquivo Funções de conta das medias 
 * DATA : 13/02/2023
 * AUTOR: Miguel
 * Versão: 1.0
 * 
 ************************************************************************************/

const calculoDeMedias = function(nota1, nota2, nota3, nota4) {

    let valor1 = Number(nota1)

    let valor2 = Number(nota2)

    let valor3 = Number(nota3)

    let valor4 = Number(nota4)

    let resultado = (valor1 + valor2 + valor3 + valor4) / 4

    return resultado


}

module.exports = {
    calculoDeMedias
}