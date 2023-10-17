/* /// calculate IMC /// */
export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

// input validation
export function notNumber(value) {
  return isNaN(value) || value == ""
}

// category imc validation
export function groupIMC(resultIMC) {
  if(resultIMC <= 18.5) {
    return "abaixo do normal."
  } 

  else if(resultIMC > 18.5 && resultIMC < 24.99) {
    return "normal."
  } 
  
  else if(resultIMC > 24.99 && resultIMC < 29.99) {
    return "sobrepeso."
  }

  else if(resultIMC > 29.99 && resultIMC < 34.99) {
    return "obesidade grau I."
  }

  else if(resultIMC > 34.99 && resultIMC < 39.99) {
    return "obesidade grau II."
  }

  else {
    return "obesidade grau III."
  }
}