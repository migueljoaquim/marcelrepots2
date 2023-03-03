/*****************************************************************************************
 * Objetivo: Arquivo de calculo de tabuada
 * DATA : 22/02/2023
 * AUTOR: Miguel
 * Versão: 1.0
 * 
 ********************************************************************************************************/

const { Module } = require("module")

const tabuada = function (multiplicandoMin, multiplicandoMax, multiplicadorMin, multiplicadorMax) {

    let minimoMultiplicando = Number(multiplicandoMin)
    let maximoMultiplicando = Number(multiplicandoMax)
    let minimoMultiplicador = Number(multiplicadorMin)
    let maximoMultiplicador = Number(multiplicadorMax)

    while (minimoMultiplicando <= maximoMultiplicando) {
        
console.log('***************************************Tabuadas**********************************************************')

        let contador = minimoMultiplicador
        while (contador <= maximoMultiplicador) {

            let resultado = minimoMultiplicando * contador
            console.log(`${minimoMultiplicando} x ${contador} = ${resultado}`)
            contador += 1
            // 5 x 2 = 10
        }
        minimoMultiplicando+=1
    }
}

// tabuada(1, 10,1,10)

module.exports = {

    tabuada
}

