/**********************************************************************************************************************************
 * Objetivo: fazer uma calculadora de tabuadas 
universidade
 * Data: 22/02/2023
 * Autor: Miguel
 * Versão: 1.0
 *************************************************************************************************************************************/


let appTabuada = require('./modulo/tabuada.js')

console.log('sistema que gerencie as médias escolares');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('digite multiplicandoMin:\n', function(multiplicadorMin){

    let multiplicandoMi = Number(multiplicadorMin)

    entradaDados.question('digite multiplicandoMax:\n', function(multiplicandoMax){

        let multiplicandoMx = Number(multiplicandoMax)

        entradaDados.question('digite multiplicadorMin:\n', function(multiplicadorMin){

            let multiplicadorMi = Number(multiplicadorMin)

            entradaDados.question('digite multiplicadorMax:\n', function(multiplicadorMax){

                let multiplicadorMx = Number(multiplicadorMax)

                if(multiplicandoMi == '' || multiplicandoMx == '' || multiplicadorMi == '' || multiplicadorMx == ''){
                    console.log('POR FAVOR DIGITAR UM NUMERO')
                    entradaDados.close()
                }
                else if(isNaN( multiplicandoMi)||isNaN(multiplicandoMx)||isNaN(multiplicadorMi)||isNaN(multiplicadorMx)){
                    console.log('Só numero por favor')
                    entradaDados.close()    
                }

                else if(multiplicandoMi < 2 || multiplicandoMx < 2){
                    console.log('por favor digitar um numero maior que 2')
                    entradaDados.close()
                }
                else if(multiplicandoMi > 100 || multiplicandoMx  > 100){
                    console.log('digitar um numero menor que 100')
                        entradaDados.close()
                }
                else if(multiplicadorMi < 1 || multiplicadorMx < 1){
                    console.log('digitar um numero maior ou igual a 1')
                        entradaDados.close()
                }
                else if(multiplicadorMi > 50 || multiplicadorMx > 50){
                    console.log('digitar um numero menor ou igual a 50')
                        entradaDados.close()
                }else{
               appTabuada.tabuada(multiplicandoMi,multiplicandoMx,multiplicadorMi,multiplicadorMx)
               entradaDados.close()
            
            }
            })
        })
    })
})