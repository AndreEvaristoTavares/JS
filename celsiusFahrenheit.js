
function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes("C")
    const fahrenheitExist = degree.toUpperCase().includes("F")
    if(!celsiusExist && !fahrenheitExist){
        throw new Error('grau não identificado')
    }
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'
 
    if(celsiusExist){
        updateDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
     }
    return formula(updateDegree) + degreeSign

}
try{
    console.log(transformDegree("32F"))
    console.log(transformDegree("0C"))
}catch(error){
    console.log(error.message)
}
