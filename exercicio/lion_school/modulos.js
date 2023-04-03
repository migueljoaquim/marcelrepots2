var cursosJson = require('./cursos.js')
var alunosJson = require('./alunos.js')

function getCursos() {


    let cursosJ = {
    }
    let array = []


    cursosJson.cursos.forEach(function (cursosFill) {

        let json = {
            icon: cursosFill.icone,
            nome: cursosFill.nome,
            sigla: cursosFill.sigla
        }


        array.push(json)


    })

    cursosJ.curso = array

    return cursosJ
}

//console.log(getCursos())




function getAlunos() {

    let json = {}

    let array = []

    alunosJson.alunos.forEach(function (alunosFillter) {


        array.push(alunosFillter.nome)


    })

    json = { cursos: array }

    return json



}
//console.log(getAlunos())






function getDados() {


    let dadosJ = {}

    let array = []

    alunosJson.alunos.forEach(function (alunos) {

        let json = {
            foto: alunos.foto,
            nome: alunos.nome,
            matricula: alunos.matricula,
        }

        array.push(json)

    })
    dadosJ.dados = array
    return dadosJ

}
//console.log(getDados())







function getCursoDados(sigla) {

    let json = {}
    let array = []
    let status = false

    alunosJson.alunos.forEach(function (aluno) {

        if (sigla == aluno.curso[0].sigla) {
            array.push(aluno)
            status = true
        }
        // console.log(aluno.curso[0].nome);
        // })

    })

    json = { alunos: array }

    if (status) {
        return json
    } else {
        return status
    }

}

//console.log(getCursoDados('DDS'));






function getSpecificDados(matricula) {

    let json = {
    }
    let dadosJ = {}

    let array = []

    alunosJson.alunos.forEach(function (dadosFillter) {

        if (matricula == dadosFillter.matricula) {

            json = { foto: dadosFillter.foto, nome: dadosFillter.nome, }
            array.push(json)
        }

    })
    dadosJ.dados = array
    return dadosJ

}
//console.log(getSpecificDados('20151001014'))




function getSpecific(status) {


    let SpecificJ = {}

    let array = []

    alunosJson.alunos.forEach(function (Specific) {

        if (status == Specific.status)

        SpecificJ = {nome : Specific.nome,
            status : Specific.status}

            array.push(SpecificJ)
    })
    SpecificJ.dados = array
    return SpecificJ

}
console.log(getSpecific('Finalizado'))