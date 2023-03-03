//comentario em linha

/*
comentario
em
bloco
*/

//permite escrever uma mensagem no terminal
console.log('testando o node.js');

// import da blibioteca que faz entrada de dados pelo usuário
var readline = require ('readline');

// criamos um objeto entradaDados com as referencias do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout


});

//o que é uma função de call back - é uma função que qdo chamada ela
//retorna o seu conteudo em uma unicá instrução, seja em apenas 
//um passo na programação



//Criamos uma função de call back para receber os dados digitados pelo o usuario
//(o objeto entradaDados aguarda a digitação do usuario, após a
//digitação do conteúdo é acionado um call back para encaminhar os dados
//para o console.log. Esse conteudo foi encaminhado através do parametro 
//dados da função)
entradaDados.question("Digite seu nome: \n", function(dados){

    console.log('Bem vindo,' + dados + ' ao servidor node.js.');

});

/*

var x = entradaDados.question('favor digitar o seu nome')