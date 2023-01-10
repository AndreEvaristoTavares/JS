let familia = {
    receita: [2000, 1100],
    despesas: [110, 132, 55, 220, 200]
}
function calculo(arrey){
    let total = 0
    for(let value of arrey){
        total += value
    }
    return total
}
function calculoFinal(){
    const calculoReceita = calculo(familia.receita);
    const calculoDespesas = calculo(familia.despesas);
    const total = calculoReceita - calculoDespesas;
    const ok = total >= 0;
    let balanco = "negativo"
    if(ok){
        balanco = "positivo"
    }
    console.log(`seu saldo é ${balanco}R$ ${total.toFixed(2)}`)
}
calculoFinal()
