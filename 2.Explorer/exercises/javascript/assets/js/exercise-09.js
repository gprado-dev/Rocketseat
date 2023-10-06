/*
  Crie uma lista de pacientes

  Cada paciente deverá conter:
    1. nome
    2. idade
    3. peso
    4. altura
  
  Escreva uma lista contendo o nome dos pacientes 
*/

const patients = [
  {
    nome: "Gustavo",
    idade: 28,
    peso: 60,
    altura: 1.84,
  },
  {
    nome: "Suyene",
    idade: 30,
    peso: 50,
    altura: 1.70,
  },
]

let patientsNames = [];

/*
for(let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].nome  
}
*/

/*
for(let patient of patients) {
  patientsNames.push(patient.nome)
}
*/


let patientsRecords = [];
let index = 1;

for(let record of patients) {
  let phrase = `
  Paciente ${index}:
  Nome: ${record.nome} Prado
  Idade: ${record.idade} anos
  Peso: ${record.peso}kg
  Altura: ${record.altura}m
  ---------------`
  
  patientsRecords.push(phrase)
  index++
}

alert(patientsRecords)