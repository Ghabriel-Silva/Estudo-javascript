let varA = 'A' //b
let varB = 'B'//c
let varC = 'C'//a

const varTemp = varA
varA = varB
varB = varC
varC = varTemp
console.log(varA,varB,varC)