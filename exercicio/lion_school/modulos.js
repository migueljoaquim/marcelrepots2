var cursosJson = require('./cursos')

var alunosJson = require('./alunos')

function getCursos (){


    let json = {
    }
    let array = []


  cursosJson.cursos.forEach(function(cursosFill){

    
        array.push(cursosFill.nome)
    

    })

    json = {aaaa: array}

    return json
}

console.log(getCursos())



function getAlunos(){

    let json = {}

}

