/**********************************************************************************************************************************
 * Objetivo: Criar um sistema de conta de impar e par
 * Data: 23/02/2023
 * Autor: Miguel
 * Versão: 1.0
 *************************************************************************************************************************************/

let resultado = require('./modulo/verificador')

console.log('sistema que gerencie as médias escolares');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
 entradaDados.question('Numero inicial:\n', function(inicio){

    let origem = Number(inicio)


    entradaDados.question('Numero final:\n', function(final){

        let fim = Number(final)


        if(origem == '' || fim == ''){
            console.log('Por favor digitar um numero')
            entradaDados.close()

        }else if(isNaN(origem) || isNaN(fim)){
            console.log('por favor prencher somente com Numeros')
            entradaDados.close()

        }else if(origem < 0 ){
            console.log('por favor digitar um numero maior que 0')
            entradaDados.close()

        }else if(origem > 500){
            console.log('Por favor digitar um menor que 500')
            entradaDados.close()
            
        }else if(fim < 100){
            console.log('digitar um numero maior que 100')
            entradaDados.close()

        }else if(fim >1000){
            console.log('por favor digitar um numero menor que 1000')
            entradaDados.close()
        }else if (origem > fim){
            console.log('Erro: o primeiro Numero n pode ser maior que o segundo')
            entradaDados.close()
        }else if(origem == fim){
            console.log('Por favor não colocar numeros iguais entre o primeiro e o segundo numero')
            entradaDados.close()
        }else{
            entradaDados.question('Qual a solicitação [PAR, IMPAR, AMBOS]:\n', function(usuarioEscolha){
                let escolhaUsuario = usuarioEscolha
            // resultado.verificador(origem, fim, )
            // console.log(typeof escolhaUsuario)
            // console.log(escolhaUsuario)
            resultado.verificador(origem, fim, escolhaUsuario)
        })
        }
            
    })

 })