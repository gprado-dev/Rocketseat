// data collect //
let number1 = prompt("Digite o primeiro número:");
let number2 = prompt("Digite o segundo número:");

// data processing //
number1 = Number(number1)
number2 = Number(number2)

// math operations //
const sum = number1 + number2
const subtraction = number1 - number2
let division = number1 / number2
const multiplication = number1 * number2
const remainder = number1 % number2

const isInteger = !Number.isInteger(division)

if(isInteger) {
  division = division.toFixed(2)
}

alert(`A soma dos dois números é: ${sum};
A subtração dos dois números é: ${subtraction};
A divisão dos dois números é: ${division};
A multiplicação dos dois números é: ${multiplication};
O resto da divisão entre os dois números é: ${remainder}.
`)

// comparisons //
const isEven = (sum % 2) === 0
const isEqual = number1 == number2

const comparisons = () => {
  // comparison 1
  if(isEven) {
    alert(`A soma dos dois números é par: ${sum}`)
  } else {
    alert(`A soma dos dois números é impar: ${sum}`)
  }

  // comparison 2
  if(isEqual) {
    alert(`Os números inseridos são iguais: ${number1} e ${number2}`)
  } else {
    alert(`Os números inseridos são diferentes: ${number1} e ${number2}`)
  }
}

comparisons()