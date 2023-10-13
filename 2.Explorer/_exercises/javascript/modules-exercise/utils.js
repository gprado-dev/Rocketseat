const message = "mensagem"
const text = "outra mensagem"

// DEFAULT EXPORT ... Só podemos utilziar um default por arquivo
// export default message

// NAMED EXPORT
// export { message, text }
//ou
// export const message
// export const text


// MIXED EXPORT (named & default)
// const date = new Date()
// const greeting = name => `hello ${name}`

// export default function (argument) {
//   console.log(date, greeting(argument))
// }

// export { date, greeting }

// EXPORT FOR IMPORT AS
// export function sum(a, b) {
//   return a + b
// }

// EXPORT FOR IMPORT * AS
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b

//ou

export { sum, multiply, subtract, divide }