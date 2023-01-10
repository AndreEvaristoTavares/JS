
function notaFinal(nota){
    if(nota >= 90 && nota <= 100){
        console.log("nota A")
    }else if(nota >= 80 && nota <= 89){
        console.log("nota B")
    }else if(nota >= 70 && nota <= 79){
        console.log("nota C")
    }else if(nota >= 60 && nota <= 69){
        console.log("nota D")
    }else if(nota >= 0 && nota < 60){
        console.log("nota F")
    }else{
        console.log("nota errada")
    }
        
    return nota
}
notaFinal(10)
notaFinal(60)
notaFinal(70)
notaFinal(80)
notaFinal(100)
notaFinal(-1)
notaFinal(1001)