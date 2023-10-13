//DEFAULT IMPORT
// nessa linha ele importa e já executa o arquivo
// import './utils.js'

// nessa linha ele importa e já executa a variável específica
import message from './utils.js'



// NAMED IMPORT
// import { message, text } from './utils.js'

// console.log(message, text)


// MIXED IMPORT (named & default)
// import funcaoPadrao, { date, greeting } from './utils.js'

// console.log(date)
// console.log(greeting('Prado'))
// funcaoPadrao('Prado')

// IMPORT AS
// import { sum as soma } from './utils.js'

// console.log(soma(1, 2))

// IMPORT * AS
import * as calculator from './utils.js'

console.log(calculator.sum(2, 4))
console.log(calculator.multiply(2, 4))
console.log(calculator.subtract(2, 4))
console.log(calculator.divide(2, 4))