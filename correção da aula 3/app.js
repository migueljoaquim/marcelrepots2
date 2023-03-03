/*****************************************************************************************
 * Objetivo: Realizar calculos matematicos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
 * DATA : 03/02/2023
 * AUTOR: Miguel
 * Versão: 1.0
 * 
 ************************************************************************************/

var matematica = require('./modulo/calculadora.js');

var readline = require('readline');
const { Console } = require('console');

   var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

//ENTRADA DE DADAOS VALOR1
entradaDados.question('Valor1: \n', function(numero1) {

    //replace - permita trocar um conteudo de string por outro
    let valor1 = numero1.replace(',', '.');

    entradaDados.question('valor2 \n', function(numero2) {


        let valor2 = numero2.replace(',', '.');


        //ENTRADA DE DADAOS VALOR2
        entradaDados.question('Escolha uma operação:[SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: \n', function(tipoCalculo) {

            //toUpperCase - Converte uma String para MAIUSCULO
            // toLowerrcase - converter uma string para minusculo

            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possivel calcular sem prencher todos os dados.');
                //Validação para verificar se os dados digitais são numeros
                //Podemos utilizar (isNaN ou typeof)
                //se usar o typeof, precisa garantir que o tipo de dados não é generico (string)
                //}else if ( typeof(valor1) != 'number' || typeof(valor2) != 'number'){
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO:Não é possivel calcular sem a entrada de valores numericos')
            } else {

                resultado = matematica.calcular(valor1, valor2, operacao)

                //valida se o retorno da função é verdadeiro ou falso (se for falso, encerra o programa)
              if(resultado == false && typeof(resultado) == 'boolean')
              entradaDados.close()
              else
              console.log(resultado)


            }
        });
    });

});