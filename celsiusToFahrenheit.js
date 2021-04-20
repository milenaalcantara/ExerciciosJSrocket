/*  ### Celsius em Fahrenheit

    Crie uma função que receba uma string em celcius ou fahrenheit
    e faça a transformação de uma unidade para a outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/



function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    let formula, updatedDegree, degreeSing;

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }
    // fluxo ideal f -> c
    updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    formula = (fahrenheit) => ((fahrenheit - 32) * 5/9)
    degreeSing = 'C'

    // fluxo alternativo C -> F
    if(celsiusExists){ 
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => (celsius  * 9/5 + 32)
        degreeSing = 'F'
    }

    return formula(updatedDegree) + degreeSing
}

try {
    console.log(transformDegree('10NC'))
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))
} catch (e) {
    console.log(e)
}