/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre para calcular a média daquele aluno.

  A média positiva deverá ser maior que 6.

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

alert("Vamos consultar a média bimestral de um aluno!");

let name = prompt("Digite o nome do aluno:");
let gradeOne = prompt("Digite a primeira nota:");
let gradeTwo = prompt("Digite a segunda nota:");
let gradeThree = prompt("Digite a terceira nota:");

gradeOne = Number(gradeOne);
gradeTwo = Number(gradeTwo);
gradeThree = Number(gradeThree);

let average = (gradeOne + gradeTwo + gradeThree) / 3;
average = average.toFixed(2);

let result;
if (average > 6) {
  result = "Parabéns, " + name + "! Você foi aprovado!! Sua média foi de: " + average + ".";
} else {
  result = "Não foi dessa vez, " + name + ", mas você ainda tem uma chance: dê o seu melhor na prova de recuperação! Sua média foi de " + average + ".";
}

alert(result);