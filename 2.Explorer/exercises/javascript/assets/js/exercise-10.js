/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima-o.

  "Paciente X possui o IMC de: Y."

  Onde X é o nome do paciente e Y é o IMC do mesmo

  Crie uma função para fazer o cálculo do IMC

  IMC = Peso / (Altura * Altura)
*/

///////////////////////////////////////////
// Lista de pacientes
const patients = [
  {
    name: "Gustavo",
    age: 28,
    weight: 60,
    height: 1.84,
  },
  {
    name: "Suyene",
    age: 30,
    weight: 48,
    height: 1.70,
  },
]

///////////////////////////////////////////
// Minha solução
function mySolution() {
  function imc() {
    // variáveis
    let result = []
    let index = 0

    // coleta de dados
    for(let patient of patients) {
      //fase da coleta
      let name = patients[index].name
      let weight = patients[index].weight
      let height = patients[index].height

      // cálculo do imc
      let imc = (weight / (height * height)).toFixed(2);

      // validação condicional
      let group = function() {
        if(imc <= 18.5) {
          return "ABAIXO DO NORMAL"
        } 
      
        else if(imc > 18.5 && imc < 24.99) {
          return "NORMAL"
        } 
        
        else if(imc > 24.99 && imc < 29.99) {
          return "SOBREPESO"
        }

        else if(imc > 29.99 && imc < 34.99) {
          return "OBESIDADE GRAU I"
        }

        else if(imc > 34.99 && imc < 39.99) {
          return "OBESIDADE GRAU II"
        }

        else {
          return "OBESIDADE GRAU III"
        }
      }

      let phrase = `O IMC de ${name} Prado é igual a ${imc} e pertence, assim, ao grupo ${group()}.

      `
      
      result.push(phrase)
      index++
    }

    // resultado da operação
    alert(result)
  }
  imc()
}

///////////////////////////////////////////
// Solução do Maykão
function maykSolution() {
  function IMC(weight, height) {
    return (weight / (height ** 2)).toFixed(2)
  }

  const printPatientIMC = (patient) => {
    return`
    Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
  `
  }

  for (let item of patients) {
    let IMCmessage = printPatientIMC(item)
    alert(IMCmessage)
  }
}

///////////////////////////////////////////
// Execução do teste
mySolution()