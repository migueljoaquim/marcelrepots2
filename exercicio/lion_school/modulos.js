var cursosJson = require('./cursos')

var alunosJson = require('./alunos')

function getCursos (){


    let json = {
    }
    let array = []


  cursosJson.cursos.forEach(function(cursosFill){

    
        array.push(cursosFill.sigla)
    

    })

    json = {cursos: array}

    return json
}
//console.log(getCursos())

function getAlunos(){

    let json = {}

    let array = []

    alunosJson.alunos.forEach(function(alunosFillter){

    
        array.push(alunosFillter.nome)
    

    })

    json = {cursos: array}

    return json



}
//console.log(getAlunos())

function getDados(){

   
    let dadosJ = {}

   let array = []

   alunosJson.alunos.forEach(function(alunos){

       let json = {foto: alunos.foto,
           nome : alunos.nome, 
           matricula: alunos.matricula,
           sexo:alunos.sexo,
           cursos: alunos.curso}

       array.push(json)   

   })
   dadosJ.dados = array
   return dadosJ

}
//console.log(getDados())



function getSpecificDados(matricula){

    let json = {
    }
     let dadosJ = {}

    let array = []

    alunosJson.alunos.forEach(function(dadosFillter){

        if(matricula == dadosFillter.matricula){

            json = {foto : dadosFillter.foto, nome: dadosFillter.nome,}
            array.push(json)
        }

    })
    dadosJ.dados = array
    return dadosJ

}
//console.log(getSpecificDados('20151001014'))

function getAlunosCursos(){
    
}