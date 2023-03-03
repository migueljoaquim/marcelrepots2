    /**********************************************************************************************************************************
     * Objetivo: Realizar a media escolar de 4 notas dos alunos
     * Data: 27/01/2023
     * Autor: Miguel
     * Versão: 1.0
     *************************************************************************************************************************************/
    console.log('Sistema de calculo de Medias Escolares');

    //import da biblioteca para entrada de dados

    var readline = require('readline');

    //Criamos um objeto para manipular a entrada de dados via teclado

    var entradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });

    /**CONCEITOS SOBRE A CRIAÇÃO DE VARIAVEIS
     * Var - toda variavel criada como var tem por objetivo ser  um escopo global,
     * ou seja, ela podera ser utilizada em diversos pontos da programação
     * 
     * 
     * let - toda variavel criada como let tem por seu objetivo ser escopo local,
     *  ou seja, sera utilizada somente naquela função
     * 
     * Conts - Tem por objetivo criar um espaço em  memoria para armazenar dados 
     *     que não sofrem mudança
     * 
     *******************************************************************************/


    //Função de Callback para retornar o nome do aluno
    entradaDados.question('Digite o nome do aluno:\n', function(nome) {
        //Variavel local para receber o nome do aluno, que
        //vai ser retornado pela função
        let nomeAluno = nome;


        entradaDados.question('Digite a nota1: \n', function(nota1) {


            let primeira = nota1;


            entradaDados.question('Digite a nota2: \n', function(nota2) {

                let segunda = nota2;


                entradaDados.question('Digite a nota3: \n', function(nota3) {

                    let terceira = nota3


                    entradaDados.question('Digite a nota4: \n', function(nota4) {

                        let quarta = nota4
                        let media = 0;

                        /**
                         * Conversão de dados String para numero
                         * Number.parseint ou parseint() - Converte para Inteiro
                         * Number.parseFloat ou parseFloat() - Converte para Real
                         * Number() - converte para int float, conforma e entrada do dado
                         * 
                         * == (Verificar a igualdade do conteudo)
                         * != (verificar a diferença de conteudo)
                         * <  (verificar o menor valor)
                         * >  (verificar o maior valor)
                         * <= (verificar o menor valor ou igual valor)
                         * >= (verificar o maior valor ou igual valor)
                         * ===(verificar a igualdade de conteudo e validar a tipagem de dados)
                         * Ex: 0 == -  v
                         *     0 == '0' v
                         *     0 === '0' f
                         *     0 ==! 0.0 f
                         * 
                         * OPERADORES LOGICOS
                         * OU      || (pipe) or
                         * E       &&        and       
                         * Negação !         not
                         * 
                         * Ordem de execução dos operadores lógicos
                         * 0º ()
                         * 1º Negação
                         * 2º E
                         * 3º OU
                         * 
                         */

                        //validação para tratar entradas vazias
                        if (primeira == '' || segunda == '' || terceira == '' || quarta == '') {

                            console.log('ERRO: É necessario digitar algum valor nas entradas.');
                            //validação para entrada de dados nãp numerica

                        } else if (isNaN(primeira) || isNaN(segunda) || isNaN(terceira) || isNaN(quarta)) {

                            console.log('ERRO: É necessario que todos os dados digitados sejam número.');
                            //Vlidação de entrada de valores entre 0 e 10

                        } else if (primeira < 0 || primeira > 10 || segunda < 0 || segunda > 10 || terceira < 0 || terceira > 10 || quarta < 0 || quarta > 10) {
                            console.log('ERRO: É necesario digitar algum valor')


                        } else {
                            media = (Number(primeira) + Number(segunda) + Number(terceira) + Number(quarta)) / 4;
                            if (media >= 7) {
                                console.log('Status do Aluno: Aprovado')
                            } else {
                                console.log('Status do Aluno: Reprovado')
                            }
                            console.log('Media final ' + media.toFixed(1))
                        }




                        //media = (Number (primeira) + Number(segunda) + Number(terceira) + Number(quarta))/4;
                        //console.log('Esssa é a medida do '+ nomeAluno + ':' + media)


                    });

                });

            });
        });


    });