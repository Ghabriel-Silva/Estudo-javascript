const firstName = ' Gabriel '
const lastName = ' ribeiro '
const fullName = firstName + lastName
const years = 22
const height = 1.67
const weight = 83 

const imc = weight/(height*height)

console.log(fullName, 'tem', years, 'pesa', weight , 'e tem', height , 'de altura e seu IMC é', imc.toFixed('2'))

console.log(`${fullName}, tem,  ${years} , pesa,   ${weight} , e tem, ${height} , de altura e seu é, ${imc.toFixed('2')} `)
