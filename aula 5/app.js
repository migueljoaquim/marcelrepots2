/********************************************************************************************************************
 * Objetivo: Trabalhando com Array
 * Data: 24/02/2023
 * Autor:Miguel
 * Versão:1.0
 **********************************************************************************************************************/

// [] - significado que estamos manipulando um array de dados
//{} - significado que estamos manipulando um formato JSON de dados


const listaNomes = ['miguel', 'rebeca', 'davi', 'isaias'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'WebCam']
const listaProdutosJSON = {}

//Forma ERRADA de manipular um conjunto de dados
// const nome1 = 'José';
// const nome2 = 'Maria';
// const nome3 = 'Luiz';

const manipulandoNomes = function() {
    //Veririfica o tipo de dados do elemento listaNomes    
    //console.log(typeof(listaNomes));

    //Veririfica o tipo de dados de um indice (item) do array    
    console.log(typeof(listaNomes[1]))

    //Exibe todos os elemento do array
    console.log(listaNomes)

    //Exibe apenas um elemento conforme o seu indice
    console.log(listaNomes[0])

    console.log('O nome do usuario é' + listaNomes[0])
    console.log(`O nome do usuario é ${listaNomes[1]}`)

    //length - permite contar quantos elementos tem um array
    console.log(`A qtde de itrns do meu array é: ${listaNomes.length}`)

    //Percorrendo um array usando while
    let cont = 0 //start

    let qtdeItens = listaNomes.length //stop


    console.log('Exibindo dados do array com While')
    while (cont <= qtdeItens) {
        console.log(`Nome: ${listaNomes[cont]}`)
        cont += 1
    }

    //Percorrendo um array usando FOR
    console.log('Exibindo dados do arrayn FOR')

    let qtdeNomes = listaNomes.length //stop

    for (let cont = 0; cont < qtdeNomes; cont++)
        console.log(`Nome ${listaNomes[cont]}`)

    //Percorrendo um array usando FOREACH

    console.log('Exibindo dados do array com FOREACH')

    //forEach é um metodo de um objeto array, que retorna uma função de call back
    listaNomes.forEach(function(nomes) {
        console.log(`Nome:${nomes}`)
    })

    //Adicionando elementos novos no array
    //Push - adiciona elementos no final do array
    listaNomes.push('Alexandre')
    listaNomes.push('Marcos', 'Lucas')
    console.log(listaNomes)

    //unshift - adicione elementos no inicio do array (ele muda a 
    // posição e todos os proximos elemrntos)
    listaNomes.unshift('Ana Maria', 'Leonardo')
    console.log(listaNomes)


    //Removendo elementos do array
    //pop - remove o ultimo elemento do array
    listaNomes.pop()
    console.log(listaNomes)

    //shift - remove o primeiro elemeno do array(reorganiza todos os
    //proximos elementos)
    listaNomes.shift()
    console.log(listaNomes)
}
const filtrandoProdutos = function() {

    //indexof - permite buscar elementos dentro de um array
    // se o retorno for -1 (não encontrou o item)
    // se o retorno for maior ou igual 0 (item encontrado)
    console.log(listaProdutos);
    //console.log(listaProdutos.indexOf('Fone de Ouvido'));

    if (listaProdutos.indexOf('Monitor') >= 0)
        console.log('O item pesquisado foi encontrado.');
    else
        console.log('Item não encontrado.');

    //slice - permite criar uma cópia do array, podendo selecionar os itens
    //const novosProdutos = listaProdutos.slice();
    const novosProdutos = listaProdutos.slice(0, 3);

    console.log(listaProdutos);
    console.log(novosProdutos);

}
const removerElementos = function(array, nomeItem) {
    //criar uma copia da Array

    let novaLista = array.slice()

    let nome = novaLista.indexof(nome)
    let status

    //splice - permite remover um elemento do array, pelo indice
    // (não esquecer de passar a qtda de item a ser removido)
    if (indice >= 0) {
        novaLista.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    if (status)
        return novaLista

    else

        return status
}

console.log(removerElemento(listaNomes, 'isaias'));
//console.log(listaProdutos);