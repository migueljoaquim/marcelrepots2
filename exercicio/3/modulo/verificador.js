/*****************************************************************************************
 * Objetivo: Arquivo de verificação
 * DATA : 22/02/2023
 * AUTOR: Miguel
 * Versão: 1.0
 * 
 ************************************************************************************/




const verificador = function(inicio, final, usuario){

     let usuario1 = usuario.toUpperCase()
     let origem = Number(inicio)
     let fim = Number(final)
    let contPar = 0
    let contImp = 0

    if(usuario1 == 'PAR'){
     console.log('*******************PAR*******************')
     while(origem <= fim){
        let resultado = origem %2
        if(resultado == 0){
            console.log(origem)
            contPar++
        }
        origem++
     }        
     console.log('QTDE: ' + contPar)

    }else if(usuario1 == 'IMPAR'){
        console.log('*******************IMPAR*******************')
        while(origem <= fim){
           let resultado = origem %2
           if(resultado != 0){
               console.log(origem)
               contImp++
           }
           origem++
   
        }
        console.log('QTDE: ' + contImp)
    }else{
        let contador = origem
        console.log('*******************PAR*******************')
        while(origem <= fim){
           let resultado = origem %2
           if(resultado == 0){
               console.log(origem)
               contPar++
           }
           origem++
        }
        origem = contador
        console.log('*******************IMPAR*******************')
        while(origem <= fim){
           let resultado = origem %2
           if(resultado != 0){
               console.log(origem)
               contImp++
           }
           origem++
    
        }
        console.log('QUANTIDADE PAR: ' + contPar)
        console.log('QUANTIDADE IMPAR: ' + contImp)
    }




     
}

module.exports = {
    verificador
}