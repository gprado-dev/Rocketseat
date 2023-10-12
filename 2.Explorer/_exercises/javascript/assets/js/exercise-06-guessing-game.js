/*
  Jogo da adivinhação

  Apresente a mensam ao usuário:
  "Adivinhe o número que estou pensando! Está entre 0 e 10."

  Crie uma lógica para gerar um número aleatório
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro! Tente novamente:"

  Caso o usuário acerto o número, apresentar a mensagem:
  "Parabéns! Você adivinhou o número em x tentativas."

  Substitua o "x" da mensagem pelo número de tentativas
*/

let result = prompt("Adivinhe o número que estou pensando! Está entre 0 e 10.");

const randomNumber = Math.round(Math.random() * 10);
// Math.ceil arredonda para cima
// Math.floor arredonda para baixo
// Math.round arredonda para o mais próximo

let xAttempts = 1;

while(Number(result) != randomNumber) {
  console.log(randomNumber);
  result = prompt("Erro! Tente novamente:");
  xAttempts++;
}

let word;
if (xAttempts == 1) {
  word = "tentativa"
} else {
  word = "tentativas"
}

// Template Literals ou Template Strings
alert(`Parabéns! O número que pensei foi o ${randomNumber} e você adivinhou o número em ${xAttempts} ${word}.`);