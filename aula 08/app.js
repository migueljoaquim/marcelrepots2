/*****************************************************************
 * Objetivo: API para interagir com Banco de Dados(GET,POST,DELETE,PUT)
 * 
 */
//IMPORT das biblioteca de projetos
const express = require('express')
const cors = require('cors')
const  request  = require('http')
const  response  = require('express')
const bodyParser = ('body-Parser')

//
const app = express()

app.use((request,response,next)=>{
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS')

    app.use(cors)
})